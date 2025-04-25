import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const how = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      title: "Choose Interview Type",
      description:
        "Select from technical, behavioral, or HR interview simulations tailored to your needs.",
      icon: "\u{1F9E0}", // Brain emoji as placeholder
    },
    {
      title: "Practice with AI",
      description:
        "Engage in realistic interview scenarios with our advanced AI interviewer.",
      icon: "\u{1F4AC}", // Speech bubble emoji as placeholder
    },
    {
      title: "Record & Review",
      description:
        "Your interviews are recorded for self-review and improvement opportunities.",
      icon: "\u{1F4FD}", // Video camera emoji as placeholder
    },
    {
      title: "Get Feedback",
      description:
        "Receive detailed AI-powered feedback on your performance and areas for improvement.",
      icon: "\u{1F4CA}", // Chart emoji as placeholder
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-background text-foreground min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">How It Works</h1>
        <p className="text-muted-foreground text-lg mb-12">
          Our AI-powered mock interview platform helps you prepare for your dream job with realistic
          interview simulations and detailed feedback.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`bg-card p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform ${
                hoveredStep === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              variants={cardVariants}
            >
              <div
                className={`text-5xl mb-4 transition-colors ${
                  hoveredStep === index ? "text-secondary" : "text-primary"
                }`}
                aria-hidden="true"
              >
                {step.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to start practicing?
          </h2>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-md hover:bg-primary-foreground hover:text-primary transition">
            Begin with a free mock interview today
          </button>
        </div>
      </div>
    </div>
  );
};

export default how;
