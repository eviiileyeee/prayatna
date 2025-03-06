const fetch = require('node-fetch');

class WeatherService {
    static async getWeatherConditions({ latitude, longitude }) {
        try {
            const url = `https://api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=wave_height,visibility`;
            const response = await fetch(url);
            const data = await response.json();
        
            if (!data.current_weather) {
                throw new Error("Weather data unavailable");
            }
        
            // Extract required data
            const windSpeed = data.current_weather.windspeed || 0; // km/h
            const waveHeight = data.hourly?.wave_height?.[0] || 0; // meters
            const visibility = data.hourly?.visibility?.[0] || 10; // km

            // Define a simple risk level based on conditions
            let riskLevel = 1; // Low risk
            if (windSpeed > 40 || waveHeight > 3 || visibility < 5) riskLevel = 3; // High risk
            else if (windSpeed > 20 || waveHeight > 2 || visibility < 8) riskLevel = 2; // Medium risk

            return { windSpeed, waveHeight, visibility, riskLevel };
        } catch (error) {
            console.error("Error fetching weather data:", error);
            return { windSpeed: 0, waveHeight: 0, visibility: 10, riskLevel: 1 };
        }
    }
}

module.exports = WeatherService ;