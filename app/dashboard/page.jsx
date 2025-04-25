import { UserButton } from '@clerk/nextjs';
import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';
import './Dashboard.css'; // Import external CSS file

function Dashboard() {
  return (
    <div className="p-6 md:p-10 bg-background min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-6 header-animation">
        <h2 className="font-bold text-3xl text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">Create and start your AI mock interview</p>
      </div>

      {/* Add New Interview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content-animation">
        <AddNewInterview />
      </div>

      {/* Previous Interview List */}
      <div className="mt-8 content-animation">
        <InterviewList />
      </div>
    </div>
  );
}

export default Dashboard;

// Dashboard.css
