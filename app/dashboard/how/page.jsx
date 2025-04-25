"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Video, BarChart } from "lucide-react";

export default function how() {
  // Animation state
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Card details
  const steps = [
    {
      icon: <Brain size={24} className="text-primary " />, 
      title: "Choose Interview Type",
      description: "Select from technical, behavioral, or HR interview simulations tailored to your needs.",
    },
    {
      icon: <MessageSquare size={24} className="text-primary" />, 
      title: "Practice with AI",
      description: "Engage in realistic interview scenarios with our advanced AI interviewer.",
    },
    {
      icon: <Video size={24} className="text-primary" />, 
      title: "Record & Review",
      description: "Your interviews are recorded for self-review and improvement opportunities.",
    },
    {
      icon: <BarChart size={24} className="text-primary" />, 
      title: "Get Feedback",
      description: "Receive detailed AI-powered feedback on your performance and areas for improvement.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-16 bg-background px-4">
      <h1 className="text-3xl font-bold text-foreground text-center">How It Works</h1>
      <p className="text-muted-foreground text-center mt-2 max-w-2xl">
        Our AI-powered mock interview platform helps you prepare for your dream job with realistic
        interview simulations and detailed feedback.
      </p>

      {/* Cards Container */}
      <div className="mt-12 grid gap-6 md:grid-cols-4 w-full max-w-6xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-card border rounded-lg p-6 text-center shadow-md cursor-pointer transition-transform transform hover:scale-105"
          >
            <div className="absolute -top-6 ml-5 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg transition-all hover:shadow-xl">
              {step.icon}
            </div>
            <h2 className="text-lg font-semibold text-foreground mt-8">{step.title}</h2>
            <p className="text-muted-foreground text-sm mt-2">{step.description}</p>
            <button className="mt-4 text-primary font-medium flex items-center justify-center mx-auto gap-1">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
