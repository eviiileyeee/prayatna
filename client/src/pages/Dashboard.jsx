import React, { useState } from 'react';
import Navbar from '../components/layout/navbar/Navbar';
import ThreeJSGlobe from '../components/layout/ThreeJSGlobe';

const Dashboard = () => {
    // Optional: State to handle risk point selection
    const [selectedRiskPoint, setSelectedRiskPoint] = useState(null);

    // Handler for risk point selection
    const handleRiskPointSelect = (riskPointData) => {
        setSelectedRiskPoint(riskPointData);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow relative">
                <ThreeJSGlobe onRiskPointSelect={handleRiskPointSelect} />
                
                {/* Optional: Risk Point Details Panel */}
                {selectedRiskPoint && (
                    <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-bold mb-2">Risk Point Details</h3>
                        <p>ID: {selectedRiskPoint.riskPointId}</p>
                        <p>Risk Level: {selectedRiskPoint.riskLevel}</p>
                        <p>Details: {selectedRiskPoint.details}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;