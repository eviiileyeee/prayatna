// utils/DistanceCalculator.js
class DistanceCalculator {
    static haversineDistance(coord1, coord2) {
        const [lon1, lat1] = coord1;
        const [lon2, lat2] = coord2;
        const R = 6371; // Earth's radius in km
        
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                 Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                 Math.sin(dLon/2) * Math.sin(dLon/2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    static calculateRouteCost(point1, point2, weatherData, trafficData) {
        let baseCost = this.haversineDistance(point1, point2);
        
        // Apply weather impact factor (0.8 to 1.5)
        const weatherImpact = 1 + (weatherData.riskLevel / 10);
        
        // Apply traffic density impact (0.9 to 1.3)
        const trafficImpact = 1 + (trafficData.density / 20);
        
        return baseCost * weatherImpact * trafficImpact;
    }
}