const RouteOptimizer = require('../services/routeOptimisation'); // Adjust the path as needed


class RouteController {
    constructor() {
        this.routeOptimizer = new RouteOptimizer();
    }

    async findRoute(req, res) {
        try {
            const { initial, finalDestination, vesselDetails } = req.body;

            if (!this.validateCoordinates(initial, finalDestination)) {
                return res.status(400).json({
                    error: 'Invalid coordinates format'
                });
            }

            if (!this.validateVesselDetails(vesselDetails)) {
                return res.status(400).json({
                    error: 'Invalid vessel details'
                });
            }

            const routeResult = await this.calculateRoute(initial, finalDestination, vesselDetails);

            if (!routeResult) {
                return res.status(404).json({
                    error: 'No viable route found'
                });
            }

            res.json({
                success: true,
                route: routeResult
            });

        } catch (error) {
            console.error('Route finding error:', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    async calculateRoute(initial, finalDestination, vesselDetails) {
        const waypoints = await this.routeOptimizer.findOptimalRoute(
            initial,
            finalDestination,
            vesselDetails
        );

        if (!waypoints) return null;

        const routeDetails = await this.calculateRouteDetails(waypoints);
        
        return {
            waypoints,
            ...routeDetails
        };
    }

    async calculateRouteDetails(waypoints) {
        let totalDistance = 0;
        let totalTime = 0;
        let fuelConsumption = 0;
        const segments = [];

        for (let i = 0; i < waypoints.length - 1; i++) {
            const weather = await WeatherService.getWeatherConditions(waypoints[i]);
            const traffic = await TrafficService.getTrafficDensity(waypoints[i]);
            
            const segmentDistance = DistanceCalculator.calculateRouteCost(
                waypoints[i],
                waypoints[i + 1],
                weather,
                traffic
            );

            segments.push({
                start: waypoints[i],
                end: waypoints[i + 1],
                distance: segmentDistance,
                weather,
                traffic
            });

            totalDistance += segmentDistance;
        }

        return {
            totalDistance,
            segments,
            estimatedTime: this.calculateEstimatedTime(totalDistance),
            fuelEstimation: this.calculateFuelEstimation(totalDistance)
        };
    }

    // Helper methods...
    validateCoordinates(initial, finalDestination) {
        return Array.isArray(initial) && 
               Array.isArray(finalDestination) &&
               initial.length === 2 && 
               finalDestination.length === 2;
    }

    validateVesselDetails(details) {
        return details && 
               typeof details.draft === 'number' &&
               typeof details.length === 'number';
    }

    calculateEstimatedTime(distance) {
        const avgSpeed = 20; // knots
        return (distance / 1.852) / avgSpeed;
    }

    calculateFuelEstimation(distance) {
        const avgFuelConsumption = 30; // tons per day
        const timeInDays = this.calculateEstimatedTime(distance) / 24;
        return avgFuelConsumption * timeInDays;
    }
}

module.exports = RouteController;
