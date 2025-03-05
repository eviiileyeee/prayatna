import React, { useState } from 'react';
import { TrendingUp, TrendingDown, ChevronUp, ChevronDown } from 'lucide-react';

const DashboardFooter = () => {
  const [fuelTrend, setFuelTrend] = useState(-12.4);
  const [isExpanded, setIsExpanded] = useState(false);

  // Fuel Consumption Data (simulated)
  const fuelConsumptionData = [
    { month: 'Jan', value: 450 },
    { month: 'Feb', value: 420 },
    { month: 'Mar', value: 400 },
    { month: 'Apr', value: 380 },
    { month: 'May', value: 360 },
    { month: 'Jun', value: 340 },
    { month: 'Jul', value: 330 },
    { month: 'Aug', value: 320 },
    { month: 'Sep', value: 310 },
    { month: 'Oct', value: 290 },
    { month: 'Nov', value: 280 },
    { month: 'Dec', value: 250 }
  ];

  // Toggle expand/collapse
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Render compact view when collapsed
  if (!isExpanded) {
    return (
      <div className="relative p-4 bg-white shadow-md rounded-lg mb-10">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Performance Dashboard</span>
          <button 
            onClick={toggleExpand} 
            className="hover:bg-gray-100 rounded-full p-1 transition-all"
          >
            <ChevronUp className="text-gray-600" />
          </button>
        </div>
      </div>
    );
  }

  // Generate the path for the line graph
  const generatePath = () => {
    return `M0 ${300 - (fuelConsumptionData[0].value / 600) * 300} ${fuelConsumptionData.map((point, index) => 
      `L${(index / 11) * 600} ${300 - (point.value / 600) * 300}`
    ).join(' ')}`;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Expand/Collapse Button */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={toggleExpand} 
          className="hover:bg-gray-100 rounded-full p-1 transition-all"
        >
          <ChevronDown className="text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Fuel Consumption Trend */}
        <div className="rounded-lg p-4 bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Fuel Consumption Trend</h3>
            <div className="flex items-center">
              {fuelTrend < 0 ? (
                <TrendingDown className="text-red-500 mr-2" />
              ) : (
                <TrendingUp className="text-green-500 mr-2" />
              )}
              <span className="font-bold text-yellow-500">
                {Math.abs(fuelTrend)}% vs Last Month
              </span>
            </div>
          </div>
          <div className="relative h-40">
            <svg className="w-full h-full" viewBox="0 0 600 300">
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.7)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                </linearGradient>
              </defs>
              {/* Animated Line Path */}
              <path
                d={generatePath()}
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth="2"
                className="stroke-current text-blue-500"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: 1000,
                  animation: 'drawLine 2s ease-out forwards'
                }}
              />
              {/* Filled Area Path */}
              <path
                d={`${generatePath()} L600 300 L0 300 Z`}
                fill="url(#blueGradient)"
                style={{
                  opacity: 0.3,
                  animation: 'fillArea 2s ease-out forwards'
                }}
              />
            </svg>
            {/* Custom animation styles */}
            <style jsx>{`
              @keyframes drawLine {
                to {
                  stroke-dashoffset: 0;
                }
              }
              @keyframes fillArea {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 0.3;
                }
              }
            `}</style>
          </div>
        </div>

        {/* Rest of the code remains the same */}
        <div className="rounded-lg p-4 bg-gray-100">
          <h3 className="text-lg font-semibold mb-4">Fleet Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>On-Time Performance</span>
              <div className="flex items-center text-red-500">
                <span className="mr-2">60.0%</span>
                <span className="text-xs">Needs Improvement</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Avg. Cargo Load</span>
              <div className="flex items-center text-green-500">
                <span>74%</span>
                <span className="text-xs ml-2">Good</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Avg. Speed</span>
              <span>17.4 knots</span>
            </div>
          </div>
        </div>

        {/* Fleet Risk Distribution */}
        <div className="rounded-lg p-4 bg-gray-100">
          <h3 className="text-lg font-semibold mb-4">Fleet Risk Distribution</h3>
          <div className="relative w-full h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#e0e0e0" 
                strokeWidth="10"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#f44336" 
                strokeWidth="10"
                strokeDasharray="251.2 251.2"
                strokeDashoffset="75.36"
                className="animate-progress"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#ffc107" 
                strokeWidth="10"
                strokeDasharray="251.2 251.2"
                strokeDashoffset="25.12"
                className="animate-progress"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#4caf50" 
                strokeWidth="10"
                strokeDasharray="251.2 251.2"
                strokeDashoffset="0"
                className="animate-progress"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-sm">Risk Levels</div>
              <div className="flex justify-center space-x-2 mt-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                  <span className="text-xs">High: 1</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  <span className="text-xs">Medium: 1</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span className="text-xs">Low: 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;