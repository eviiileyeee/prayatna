const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
    name: String,
    waypoints: [{
        coordinates: [Number],
        type: { type: String, enum: ['PORT', 'WAYPOINT'] }
    }],
    restrictions: {
        vesselTypes: [String],
        minDepth: Number,
        maxDraft: Number
    },
    trafficDensity: { type: Number, min: 0, max: 10 },
    weatherRisk: { type: Number, min: 0, max: 10 },
    seasonalFactors: [{
        season: String,
        riskLevel: Number,
        recommendations: String
    }]
});

module.exports = mongoose.model('Route', routeSchema);