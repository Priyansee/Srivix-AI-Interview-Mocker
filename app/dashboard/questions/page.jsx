"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const Questions = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const questions = [
    {
      category: "Behavioral Questions",
      items: [
        {
          question: "Tell me about a time you faced a challenge at work.",
          answer: "Discuss a specific example, explain the situation, your actions, and the outcome, focusing on the positive impact."
        },
        {
          question: "How do you handle stress and pressure?",
          answer: "Highlight stress management techniques like prioritization, delegation, and maintaining a positive mindset."
        }
      ]
    },
    {
      category: "Technical Questions",
      items: [
        {
          question: "Explain the concept of polymorphism in programming.",
          answer: "Polymorphism allows objects to be treated as instances of their parent class, enabling dynamic method invocation."
        },
        {
          question: "What is a RESTful API?",
          answer: "A RESTful API uses HTTP requests for CRUD operations and follows principles like statelessness and resource representation."
        }
      ]
    },
    {
      category: "HR Questions",
      items: [
        {
          question: "Why do you want to work for our company?",
          answer: "Showcase your research on the company, aligning their goals with your skills and career aspirations."
        },
        {
          question: "Where do you see yourself in 5 years?",
          answer: "Demonstrate ambition and alignment with the company's growth while maintaining a realistic perspective."
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -30 },
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
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Common Interview Questions</h1>
        <p className="text-muted-foreground text-lg mb-12">
          Explore commonly asked questions categorized by interview type.
        </p>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {questions.map((category, catIndex) => (
            <div key={catIndex} className="">
              <h2 className="text-2xl font-semibold my-5 mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-card p-4 rounded-lg shadow-md"
                    variants={cardVariants}
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleQuestion(`${catIndex}-${index}`)}
                    >
                      <h3 className="text-lg font-medium">{item.question}</h3>
                      <span className="text-muted-foreground text-sm">
                        {expandedQuestion === `${catIndex}-${index}` ? "-" : "+"}
                      </span>
                    </div>
                    {expandedQuestion === `${catIndex}-${index}` && (
                      <p className="text-muted-foreground text-sm mt-2">
                        {item.answer}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Questions;
