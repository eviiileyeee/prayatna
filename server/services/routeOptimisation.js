const WeatherService = require("./weatherServices");
const TrafficService = require("./trafficServices");
const DistanceCalculator = require("../utils/distanceCalculator");

class RouteOptimizer {
    constructor() {
        this.weatherService = WeatherService;
        this.trafficService = TrafficService;
        this.distanceCalculator = DistanceCalculator;
    }

    async findOptimalRoute(start, end, vesselDetails) {
        const openSet = new PriorityQueue();
        const closedSet = new Set();
        const cameFrom = new Map();
        const gScore = new Map();
        const fScore = new Map();

        openSet.enqueue(start, 0);
        gScore.set(start.toString(), 0);
        fScore.set(start.toString(), this.distanceCalculator.haversineDistance(start, end));

        while (!openSet.isEmpty()) {
            const current = openSet.dequeue();

            if (this.isDestinationReached(current, end)) {
                return this.reconstructPath(cameFrom, current);
            }

            closedSet.add(current.toString());

            const neighbors = await this.findValidNeighbors(current, vesselDetails);
            
            for (const neighbor of neighbors) {
                if (closedSet.has(neighbor.toString())) continue;

                const weatherData = await this.weatherService.getWeatherConditions(neighbor);
                const trafficData = await this.trafficService.getTrafficDensity(neighbor);
                
                const tentativeGScore = gScore.get(current.toString()) +
                    this.distanceCalculator.calculateRouteCost(
                        current,
                        neighbor,
                        weatherData,
                        trafficData
                    );

                if (!gScore.has(neighbor.toString()) || tentativeGScore < gScore.get(neighbor.toString())) {
                    cameFrom.set(neighbor.toString(), current);
                    gScore.set(neighbor.toString(), tentativeGScore);
                    const estimatedCost = tentativeGScore + 
                        this.distanceCalculator.haversineDistance(neighbor, end);
                    fScore.set(neighbor.toString(), estimatedCost);
                    
                    openSet.enqueue(neighbor, estimatedCost);
                }
            }
        }

        return null;
    }

    async findValidNeighbors(point, vesselDetails) {
        const ports = await Port.find({
            coordinates: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: point
                    },
                    $maxDistance: 500000
                }
            },
            'restrictions.maxDraft': { $gte: vesselDetails.draft },
            'restrictions.maxLength': { $gte: vesselDetails.length }
        });

        return ports.map(port => port.coordinates.coordinates);
    }
}

module.exports = RouteOptimizer;