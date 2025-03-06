import React from 'react';
import { useLocations } from '../../hooks/useLocations';

const LocationTracker = () => {
  const { 
    location, 
    loading, 
    error 
  } = useLocations();

  if (loading) return <div>Tracking location...</div>;
  if (error) return <div>Location Error: {error}</div>;

  return (
    <div>
      {location && (
        <div>
          <h2>Current Location</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Accuracy: {location.accuracy} meters</p>
          <p>Timestamp: {location.timestamp.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default LocationTracker;
