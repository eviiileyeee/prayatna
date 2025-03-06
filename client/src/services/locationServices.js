// src/services/locationService.js
import api from '../api/api';

export async function sendLocationData(location) {
  try {
    // Ensure the location object matches backend expectations
    const payload = {
      latitude: location.latitude,
      longitude: location.longitude,
      accuracy: location.accuracy || null,
      timestamp: location.timestamp || new Date().toISOString()
    };

    const response = await api.post('/find', payload);
    return response.data;
  } catch (error) {
    console.error('Location tracking error:', error.response?.data || error.message);
    throw error;
  }
}
