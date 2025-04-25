"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (params?.interviewId) {
      GetFeedback();
    }
  }, [params?.interviewId]);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-6 sm:p-10 bg-background min-h-screen">
      {feedbackList?.length === 0 ? (
        <h2 className="font-bold text-xl text-gray-500 text-center">
          No Interview Feedback Records Available
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-red-500 text-center">Congratulations!</h2>
          <h2 className="font-bold text-2xl text-center">Here is your feedback</h2>
          <h2 className="text-sm text-gray-500 text-center mb-5">
            Below are the questions, along with the correct answers, your responses, and feedback for your improvement.
          </h2>

          {feedbackList.map((item, index) => (
            <Collapsible key={index} className="mt-5">
              <CollapsibleTrigger className="p-4 bg-secondary rounded-lg flex justify-between items-center gap-4 w-full hover:bg-gray-200 transition-all ease-in-out">
                <span>{item.question}</span>
                <ChevronsUpDown className="h-5 w-5 text-primary" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-3 p-4">
                  <h2 className="text-red-500 p-2 border rounded-lg font-bold">
                    <strong>Rating:</strong> {item.rating}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                    <strong>Your Answer:</strong> {item.userAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                    <strong>Correct Answer:</strong> {item.correctAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-secondary text-sm text-primary">
                    <strong>Feedback:</strong> {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}

      <div className="mt-6 text-center">
        <Button onClick={() => router.replace("/dashboard")} className="w-full sm:w-auto">
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default Feedback;
