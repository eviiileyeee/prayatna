import { useState, useCallback, useEffect, useRef } from 'react';
import { sendLocationData } from '../services/locationServices';

export const useLocations = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Use ref to prevent multiple simultaneous tracking attempts
  const isTrackingRef = useRef(false);

  // Debounce function to prevent excessive calls
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Get Current Position
  const getCurrentPosition = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        setError('Geolocation not supported');
        reject(new Error('Geolocation not supported'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: new Date(position.timestamp)
          };

          resolve(locationData);
        },
        (error) => {
          setError(error.message);
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    });
  }, []);

  // Debounced Location Tracking
  const trackLocation = useCallback(
    debounce(async (locationData) => {
      // Prevent multiple simultaneous tracking attempts
      if (isTrackingRef.current) return;

      try {
        isTrackingRef.current = true;
        setLoading(true);
        
        const response = await sendLocationData(locationData);
        
        // Only update state if needed
        setLocation(prev => 
          prev?.latitude !== locationData.latitude || 
          prev?.longitude !== locationData.longitude 
            ? locationData 
            : prev
        );

        return response;
      } catch (err) {
        setError(err.message);
        return null;
      } finally {
        isTrackingRef.current = false;
        setLoading(false);
      }
    }, 1000), // 1 second debounce
    []
  );

  // Memoized location tracking effect
  useEffect(() => {
    let watchId;
    
    const startTracking = async () => {
      try {
        // Initial location fetch
        const initialLocation = await getCurrentPosition();
        await trackLocation(initialLocation);

        // Start continuous tracking
        watchId = navigator.geolocation.watchPosition(
          async (position) => {
            const locationData = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
              timestamp: new Date(position.timestamp)
            };

            await trackLocation(locationData);
          },
          (error) => setError(error.message),
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
            distanceFilter: 10 // Update every 10 meters
          }
        );
      } catch (err) {
        setError(err.message);
      }
    };

    startTracking();

    // Cleanup
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [getCurrentPosition, trackLocation]);

  return {
    location,
    loading,
    error,
    getCurrentPosition,
    trackLocation
  };
};
