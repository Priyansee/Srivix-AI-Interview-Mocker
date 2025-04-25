"use client"; // Ensuring it's a client component

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { Loader } from "lucide-react";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { db } from "@/utils/db";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDailog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const router = useRouter(); // from next/navigation

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault(); // Prevent the default form submission and page refresh

    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt =
      "Job Position/Role: " +
      jobPosition +
      "\nJob Description/Tech Stack: " +
      jobDesc +
      "\nYears of Experience: " +
      jobExperience +
      " Depending upon the given information please provide us " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview questions with answers in JSON format. Give Questions and Answers as fields in JSON.";

    try {
      const result = await chatSession.sendMessage(InputPrompt);
      const MockJsonResp = result.response
        .text()
        .replace("```json", "")
        .replace("```", "")
        .trim(); // Remove code blocks from the response to parse JSON properly

      console.log(JSON.parse(MockJsonResp));
      setJsonResponse(MockJsonResp); // Store response as a string in state

      if (MockJsonResp) {
        // Inserting data into the database
        const resp = await db
          .insert(MockInterview)
          .values({
            mockId: uuidv4(), // Generate unique ID using uuid
            jsonMockResp: MockJsonResp,
            jobPosition: jobPosition,
            jobDesc: jobDesc,
            jobExperience: jobExperience,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format("DD-MM-YYYY, h:mm:ss a"),
          })
          .returning({ mockId: MockInterview.mockId });

        console.log("Inserted ID:", resp);
        if (resp) {
          setOpenDialog(false);
          router.push("/dashboard/interview/" + resp[0]?.mockId); // Redirect to interview page
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Trigger button for opening the dialog */}
      <div
        className="p-10 border border-gray-200 rounded-lg cursor-pointer hover:bg-secondary hover:border-gray-400 transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      {/* Interview Dialog */}
      <Dialog open={openDailog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-xl md:max-w-2xl lg:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your Job Interview
            </DialogTitle>
            <DialogDescription>
              Add details about your Job Position/Role, Job Description, and
              Years of Experience
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit}>
            <div>
              <div className="mt-5 my-2">
                <label>Job Position/Role</label>
                <Input
                  placeholder="Ex. Full Stack Developer"
                  required
                  onChange={(event) => setJobPosition(event.target.value)}
                />
              </div>
              <div className="my-2">
                <label>Job Description/Tech Stack</label>
                <Textarea
                  placeholder="MERN Stack, Angular, etc"
                  required
                  onChange={(event) => setJobDesc(event.target.value)}
                />
              </div>
              <div className="my-2">
                <label>Years of Experience</label>
                <Input
                  type="number"
                  placeholder="Ex.3"
                  max="50"
                  required
                  onChange={(event) => setJobExperience(event.target.value)}
                />
              </div>
              <div className="flex gap-5 justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader className="animate-spin" /> 'Generating Your
                      Interview Questions'
                    </>
                  ) : (
                    "Start Interview"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
