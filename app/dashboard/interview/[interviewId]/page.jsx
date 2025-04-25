"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Lightbulb, Radius, WebcamIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Interview({ params: promisedParams }) {
  const [interviewData, setInterviewData] = useState([]); // state to store interview data
  const [webCamEnabled, setWebCamEnabled] = useState(false); // state to store web cam enabled status
  const params = React.use(promisedParams); // Unwrap the promised `params`

  useEffect(() => {
    if (params?.interviewId) {
      console.log(params.interviewId); // Log the `interviewId` for debugging
      GetInterviewDetails(); // Call the function to fetch interview details
    }
  }, [params]);

  // Function to retrieve the interview details using the mock id/interview id combination
  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select('')
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      setInterviewData(result[0]); // Set the interview data in state
    } catch (error) {
      console.error('Error fetching interview details:', error);
    }
  };

  return (
    <div className='my-6'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='flex flex-col my-5 gap-3'>
          <div className='flex flex-col gap-5 border rounded-lg p-5'>
            <h2 className='text-lg'>
              <strong>Job Role/Position:</strong> {interviewData.jobPosition}
            </h2>
            <h2 className='text-lg'>
              <strong>Job Description:</strong> {interviewData.jobDesc}
            </h2>
            <h2 className='text-lg'>
              <strong>Years of Experience:</strong> {interviewData.jobExperience}
            </h2>
          </div>
          <div className='p-5 border rounded-lg hover:border-yellow-500 transition-all'>
            <h2 className='flex gap-2 items-center'>
              <Lightbulb className='hover:scale-125 hover:rotate-6 hover:text-yellow-500 transition-transform duration-300' />
              <strong>Information</strong>
            </h2>
            <h2 className='mt-2'>{process.env.NEXT_PUBLIC_INFO}</h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{ width: 500, height: 300, marginTop: 20 }}
            />
          ) : (
            <>
              <WebcamIcon className='h-72 w-full my-5 p-10 bg-secondary border rounded-lg' />
              <Button className='w-full' onClick={() => setWebCamEnabled(true)}>
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className='flex justify-start items-start w-full'>
        <Link href={'/dashboard/interview/' + params?.interviewId + '/start'}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
