import React from 'react';
import SmallDashboard from './SmallDashBoard';

const MainDashboard = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex-grow relative">
        {/* This is where the globe or left-side content will go */}
        {children}
      </div>
      <SmallDashboard />
    </div>
  );
};

export default MainDashboard;