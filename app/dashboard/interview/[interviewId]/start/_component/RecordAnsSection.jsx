"use client"
import useSpeechToText from 'react-hook-speech-to-text';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import moment from 'moment';
import { useUser } from '@clerk/nextjs';
import { UserAnswer } from '@/utils/schema';

function RecordAnsSection({mockInterviewQuestions,activeQuestionIndex,interviewData}) {
  const [userAnswer, setUserAnswer] = React.useState(''); // to record results
  const {user} = useUser(); // to get user details
  const [loading, setLoading]=useState(false); // to show loading state
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    results.map((result)=>(
      setUserAnswer(prevAns=>prevAns+result?.transcript)
    ))
  }, [results]);

  useEffect(()=>{
    if(!isRecording&&userAnswer.length>10)
    {
      UpdateUserAnswer();
    }
  },[userAnswer])



  const StartStopRecording = async () => {
    if (isRecording) {
      
      stopSpeechToText();
      // if (userAnswer?.length<10) {
      //   setLoading(false);
      //   toast('Error while saving answer, please record again');
      //   console.log(error);
      //   return;
      // }
      
    } else {
      startSpeechToText();
    }
  };
  
  const UpdateUserAnswer =async()=>{
    console.log(userAnswer);
    setLoading(true);
    const feedbackPrompt="Question:"+mockInterviewQuestions[activeQuestionIndex]?.Question+
      "User Answer:"+userAnswer+" Depending upon the question and user answer for the given interview question,"+ 
         "please provide us a rating for the answer and feedback as areas of improvement, if any, "+
         "in just 3 to 5 lines. Return the response in JSON format with rating field and feedback field.";
      const result = await chatSession.sendMessage(feedbackPrompt);
      const mockJosnResp = (result.response.text()).replace('```json','').replace('```','').trim();
      console.log(mockJosnResp);
      const JsonFeedbackResp = JSON.parse(mockJosnResp);

      const resp = await db.insert(UserAnswer)
      .values({
        mockIdRef:interviewData?.mockId,
        question:mockInterviewQuestions[activeQuestionIndex]?.Question,
        correctAns:mockInterviewQuestions[activeQuestionIndex]?.Answer,
        userAns:userAnswer,
        feedback:JsonFeedbackResp?.feedback,
        rating:JsonFeedbackResp?.rating,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-YYYY HH:mm:ss')
      })
      if(resp){
        toast('Answer recorded successfully');
        setUserAnswer('');
        setResults([]);        
      }
      setResults([]);
      setLoading(false);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col mt-20 items-center justify-center bg-secondary p-5 border rounded-lg'>
          <Image src={'/webcam.png'} width={200} height={200} className='absolute' alt='img' />
          <Webcam 
          mirrored={true}
          style={{
            width: '100%',
            height: 300,
            zIndex: 10,
          }}
          />
        </div>
        <Button
        disabled={loading}
        onClick={StartStopRecording}
        className="my-10">
        {isRecording ?
        <h2 className='flex gap-2 items-center'>
        <Mic/>Stop Recording
        </h2>
        :
       'Record Answer' } </Button>
         
    </div>  
     
  )
}

export default RecordAnsSection