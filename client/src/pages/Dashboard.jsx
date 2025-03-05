import React, { useState } from 'react';
import ThreeJSGlobe from '../components/ui/ThreeJSGlobe';
import MainDashboard from '../components/ui/MainDashboard';
import DashboardFooter from '../pages/DashboardFooter'; // Import the DashboardFooter

const Dashboard = () => {
    // Optional: State to handle risk point selection
    const [selectedRiskPoint, setSelectedRiskPoint] = useState(null);
    
    // Handler for risk point selection
    const handleRiskPointSelect = (riskPointData) => {
        setSelectedRiskPoint(riskPointData);
    };
    
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="flex flex-grow">
                <MainDashboard>
                    <ThreeJSGlobe onRiskPointSelect={handleRiskPointSelect} />
                    
                    {/* Optional: Risk Point Details Panel */}
                    {selectedRiskPoint && (
                        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md z-10">
                            <h3 className="font-bold mb-2">Risk Point Details</h3>
                            <p>ID: {selectedRiskPoint.riskPointId}</p>
                            <p>Risk Level: {selectedRiskPoint.riskLevel}</p>
                            <p>Details: {selectedRiskPoint.details}</p>
                        </div>
                    )}
                </MainDashboard>
            </div>
            
            {/* Add DashboardFooter at the bottom of the page */}
            <div className="p-4">
                <DashboardFooter />
            </div>
        </div>
    );
};

export default Dashboard;