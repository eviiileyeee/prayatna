import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const ThreeJSGlobe = ({ onRiskPointSelect }) => {
  // Sample risk data
  const riskData = [
    {
      lat: 48.8566,  // Paris
      lng: 2.3522,
      size: 0.01,
      color: 'red',
      riskLevel: 'high',
      riskPointId: 1,
      details: 'High urban risk zone'
    },
    {
      lat: 51.5074,  // London
      lng: -0.1278,
      size: 0.01,
      color: 'orange',
      riskLevel: 'medium',
      riskPointId: 2,
      details: 'Moderate risk area'
    },
    {
      lat: 40.7128,  // New York
      lng: -74.0060,
      size: 0.02,
      color: 'green',
      riskLevel: 'low',
      riskPointId: 3,
      details: 'Low risk zone'
    }
  ];

  const [selectedRisk, setSelectedRisk] = useState(null);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation(prevRotation => (prevRotation + 1) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ 
        height: '500px',  // Fixed height
        width: '100%', 
        position: 'relative',
        overflow: 'hidden'  // Prevent scrolling effects
      }}
    >
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%'
      }}>
        <Globe
          width={500}  // Fixed width
          height={500}  // Fixed height
          globeImageUrl="/2k_earth_daymap.jpg"
          bumpImageUrl="/2k_earth_topobump.jpg"
          
          // X-axis rotation
          initialPolarAngle={rotation}
          
          // Risk points
          pointsData={riskData}
          pointAltitude="size"
          pointColor="color"
          pointRadius={0.5}
          
          // Interaction
          onPointClick={(point) => {
            setSelectedRisk(point);
            onRiskPointSelect?.(point);
          }}
          
          // Customize globe appearance
          backgroundColor="rgba(240, 245, 255, 1)"
          atmosphereColor="lightskyblue"
          atmosphereAltitude={0.25}
        />
      </div>
      
      {/* Optional: Risk Details Overlay */}
      {selectedRisk && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '20px',
            background: 'white',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 10
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