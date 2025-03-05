import React, { useState } from 'react';
import SmallDashboard from './SmallDashBoard';
import DashNav from './DashNav';
import DashboardFooter from './DashboardFooter'; // Import DashboardFooter

const MainDashboard = ({ children }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex w-full h-screen mt-16 relative">
      <div className="flex-grow relative">
        {/* This is where the globe or left-side content will go */}
        {children}
      </div>
      <SmallDashboard />
      
      {/* DashNav is now inside MainDashboard and not fixed */}
      <DashNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Add DashboardFooter at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <DashboardFooter />
      </div>
    </div>
  );
};

export default MainDashboard;