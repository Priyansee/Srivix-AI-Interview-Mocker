import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function QuestionsSection({ mockInterviewQuestions, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Your browser does not support text-to-speech');
    }
  };

  return (
    <div className="p-5 my-10 border rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestions &&
          Array.isArray(mockInterviewQuestions) &&
          mockInterviewQuestions.map((Question, index) => (
            <h2
              className={`p-2 bg-secondary rounded-full text-sm md:text-sm text-center cursor-pointer ${
                activeQuestionIndex === index && 'bg-secondary-foreground text-white'
              }`}
              key={index}
            >
              Question #{index + 1}
            </h2>
          ))}
      </div>

      {mockInterviewQuestions &&
        mockInterviewQuestions[activeQuestionIndex] && (
          <h2 className="my-5 text-md md:text-lg">
            {mockInterviewQuestions[activeQuestionIndex].Question} {/* FIXED */}
          </h2>
        )}

      {mockInterviewQuestions &&
        mockInterviewQuestions[activeQuestionIndex] && (
          <Volume2
            className="cursor-pointer"
            onClick={() =>
              textToSpeech(mockInterviewQuestions[activeQuestionIndex].Question) // FIXED
            }
          />
        )}

      <div className="border rounded-lg p-5 bg-slate-200 mt-20">
        <h2 className="flex gap-2 items-center">
          <Lightbulb className="hover:scale-125 hover:rotate-6 hover:text-yellow-500 transition-transform duration-300" />
          <strong>NOTE</strong>
        </h2>
        <h2 className="text-sm text-primary my-2">
          {process.env.NEXT_PUBLIC_QUESTIONS_NOTE}
        </h2>
      </div>
    </div>
  );
}

export default QuestionsSection;
