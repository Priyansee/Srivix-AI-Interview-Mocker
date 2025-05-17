"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Upgrade() {
  // State to manage selected plan
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-foreground text-center">Upgrade Your Interview Prep</h1>
      <p className="text-muted-foreground text-center mt-2">Choose the plan that matches your interview preparation needs</p>

      {/* Pricing Plans Container */}
      <div className="mt-8 grid gap-6 md:grid-cols-3 w-full max-w-5xl">
        {/* Basic Plan */}
        <motion.div
          className={`border rounded-lg p-6 text-center shadow-md bg-card cursor-pointer ${selectedPlan === "Basic" ? "border-primary" : ""}`}
          onClick={() => setSelectedPlan("Basic")}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <h2 className="text-xl font-bold text-foreground">Basic</h2>
          <p className="text-2xl font-bold text-foreground mt-2">Free</p>
          <ul className="text-muted-foreground text-sm mt-4 space-y-2">
            <li>✓ 3 mock interviews per month</li>
            <li>✓ Basic AI feedback</li>
            <li>✓ Interview questions library</li>
            <li>✓ Basic performance analytics</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition">
            Get Started
          </button>
        </motion.div>

        {/* Pro Plan (Highlighted as Recommended) */}
        <motion.div
          className={`border-2 border-primary rounded-lg p-6 text-center shadow-lg bg-card relative cursor-pointer ${selectedPlan === "Pro" ? "bg-opacity-90" : ""}`}
          onClick={() => setSelectedPlan("Pro")}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Recommended Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
            Recommended
          </div>
          <h2 className="text-xl font-bold text-foreground">Pro</h2>
          <p className="text-2xl font-bold text-foreground mt-2">500₹/month</p>
          <ul className="text-muted-foreground text-sm mt-4 space-y-2">
            <li>✓ Unlimited mock interviews</li>
            <li>✓ Advanced AI feedback</li>
            <li>✓ Custom interview scenarios</li>
            <li>✓ Detailed performance analytics</li>
            <li>✓ Interview recording & playback</li>
            <li>✓ Priority support</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-opacity-90 transition">
            Get Started
          </button>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          className={`border rounded-lg p-6 text-center shadow-md bg-card cursor-pointer ${selectedPlan === "Enterprise" ? "border-primary" : ""}`}
          onClick={() => setSelectedPlan("Enterprise")}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-foreground">Enterprise</h2>
          <p className="text-2xl font-bold text-foreground mt-2">Custom</p>
          <ul className="text-muted-foreground text-sm mt-4 space-y-2">
            <li>✓ All Pro features</li>
            <li>✓ Custom AI training</li>
            <li>✓ Team management</li>
            <li>✓ Bulk licenses</li>
            <li>✓ API access</li>
            <li>✓ Dedicated support</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </div>
  );
}
