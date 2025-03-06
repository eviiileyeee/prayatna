import React, { createContext, useContext, useState } from 'react';
import { useLocations } from '../hooks/useLocations';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const locationService = useLocations();
  const [nearbyLocations, setNearbyLocations] = useState([]);

  const updateNearbyLocations = async (locationData) => {
    try {
      const response = await locationService.sendLocationToBackend(locationData);
      
      if (response?.nearbyLocations) {
        setNearbyLocations(response.nearbyLocations);
      }
    } catch (error) {
      console.error('Failed to update nearby locations', error);
    }
  };

  return (
    <LocationContext.Provider 
      value={{
        ...locationService,
        nearbyLocations,
        updateNearbyLocations
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  
  return context;
};
