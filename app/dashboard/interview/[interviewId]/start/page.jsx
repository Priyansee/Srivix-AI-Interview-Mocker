"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import QuestionsSection from './_component/QuestionsSection';
import RecordAnsSection from './_component/RecordAnsSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({ params: promisedParams }) {
  const [interviewData, setInterviewData] = useState(); // state to store interview data
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState(); // state to store interview questions
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); // state to store active question index
  const params = React.use(promisedParams); // Unwrap `params` promise

  useEffect(() => {
    if (params?.interviewId) {
      GetInterviewDetails(); 
    }
  }, [params]);

  // Used to retrieve the interview details using the mockId/interviewId combination
  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select('')
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      
      const jsonMockResp = JSON.parse(result[0]?.jsonMockResp || '{}'); // Fetching the JSON response from the database
      console.log(jsonMockResp); // Logging the JSON response for debugging purposes
      setMockInterviewQuestions(jsonMockResp); // Setting the JSON response in state
      setInterviewData(result[0]); // Set the interview data in state
    } catch (error) {
      console.error('Failed to fetch interview details:', error);
    }
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* Questions */}
        <QuestionsSection mockInterviewQuestions={mockInterviewQuestions}
                          activeQuestionIndex={activeQuestionIndex}  
        />
        {/* Video/Audio Recording */}
        < RecordAnsSection
        mockInterviewQuestions={mockInterviewQuestions}
        activeQuestionIndex={activeQuestionIndex}
        interviewData={interviewData}
       />

      </div>
      <div className='flex justify-end gap-6'>
       { activeQuestionIndex>0&& 
       <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
       {activeQuestionIndex!=mockInterviewQuestions?.length-1&& 
       <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
       { activeQuestionIndex==mockInterviewQuestions?.length-1&& 
       <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}>
       <Button>Submit Interview</Button>
       </Link>}
      </div>
    </div>
  );
}

export default StartInterview;
