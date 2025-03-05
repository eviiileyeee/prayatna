import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { 
  LayoutGrid, 
  MapPin, 
  Ship, 
  Settings 
} from 'lucide-react';

const DashNav = ({ activeTab, onTabChange }) => {
  const navItems = [
    { 
      icon: LayoutGrid, 
      label: 'Dashboard', 
      key: 'dashboard' 
    },
    { 
      icon: MapPin, 
      label: 'Routes', 
      key: 'routes' 
    },
    { 
      icon: Ship, 
      label: 'Ship Info', 
      key: 'shipInfo' 
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      key: 'settings' 
    }
  ];

  return (
    <div className="flex items-center justify-center bg-gray-800 rounded-full p-2 space-x-2">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onTabChange(item.key)}
          className={`
            flex items-center justify-center 
            p-2 rounded-full 
            transition-all duration-300 
            ${activeTab === item.key 
              ? 'bg-blue-600 text-white' 
              : 'bg-transparent text-gray-400 hover:bg-gray-700'
            }
          `}
        >
          <item.icon size={20} />
          {activeTab === item.key && (
            <span className="ml-2 text-sm font-medium">{item.label}</span>
          )}
        </button>
      ))}
    </div>
  );
};

const ThreeJSGlobe = ({ onRiskPointSelect }) => {
  const riskData = [
    {
      lat: 48.8566, // Paris
      lng: 2.3522,
      size: 0.01,
      color: "red",
      riskLevel: "high",
      riskPointId: 1,
      details: "High urban risk zone",
    },
    {
      lat: 51.5074, // London
      lng: -0.1278,
      size: 0.01,
      color: "orange",
      riskLevel: "medium",
      riskPointId: 2,
      details: "Moderate risk area",
    },
    {
      lat: 40.7128, // New York
      lng: -74.006,
      size: 0.02,
      color: "green",
      riskLevel: "low",
      riskPointId: 3,
      details: "Low risk zone",
    },
  ];

  const riskPaths = [
    {
      startLat: 48.8566,
      startLng: 2.3522, // Paris
      endLat: 51.5074,
      endLng: -0.1278, // London
      color: "red",
    },
    {
      startLat: 51.5074,
      startLng: -0.1278, // London
      endLat: 40.7128,
      endLng: -74.006, // New York
      color: "yellow",
    },
    {
      startLat: 40.7128,
      startLng: -74.006, // New York
      endLat: 48.8566,
      endLng: 2.3522, // Paris
      color: "green",
    },
  ];

  const [selectedRisk, setSelectedRisk] = useState(null);
  const [activeTab, setActiveTab] = useState('routes'); // Default active tab
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        height: "500px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column", // Change to column to stack elements
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Add the navigation component at the top */}
     

      <Globe
        width={500}
        height={500}
        globeImageUrl="/2k_earth_daymap.jpg"
        bumpImageUrl="/2k_earth_topobump.jpg"
        backgroundColor="white"
        atmosphereColor="lightskyblue"
        atmosphereAltitude={0.25}
        
        pointsData={riskData}
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.5}
        onPointClick={(point) => {
          setSelectedRisk(point);
          onRiskPointSelect?.(point);
        }}

        arcsData={riskPaths}
        arcStartLat={(d) => d.startLat}
        arcStartLng={(d) => d.startLng}
        arcEndLat={(d) => d.endLat}
        arcEndLng={(d) => d.endLng}
        arcColor={(d) => d.color || "gray"}
        arcStroke={2.5}
        arcAltitude={0.2}
        arcDashLength={0.5}
        arcDashGap={1.5}
        arcDashAnimateTime={1500}
      />

      {selectedRisk && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "20px",
            background: "white",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 10,
          }}
        >
          <h3>Risk Point Details</h3>
          <p>ID: {selectedRisk.riskPointId}</p>
          <p>Risk Level: {selectedRisk.riskLevel}</p>
          <p>Details: {selectedRisk.details}</p>
        </div>
      )}
       <div className="absolute bottom-1 z-10">
        <DashNav 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      </div>
    </div>
  );
};

export default ThreeJSGlobe;