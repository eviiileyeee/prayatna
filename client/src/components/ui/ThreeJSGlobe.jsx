import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
    </div>
  );
};

export default ThreeJSGlobe;

