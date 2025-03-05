const mongoose = require("mongoose");

const portSchema = new mongoose.Schema({
    name: String,
    coordinates: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: [Number]
    },
    connections: [{
        portId: mongoose.Schema.Types.ObjectId,
        distance: Number,
        regularRoutes: Boolean,
        trafficDensity: { type: Number, min: 0, max: 10 }
    }],
    restrictions: {
        maxDraft: Number,
        maxLength: Number,
        maxWidth: Number
    },
    facilities: [{
        type: String,
        enum: ['FUEL', 'REPAIRS', 'CARGO', 'CONTAINER', 'BULK']
    }],
    congestionLevel: { type: Number, min: 0, max: 10 },
    weatherConditions: {
        windSpeed: Number,
        waveHeight: Number,
        visibility: Number,
        lastUpdated: Date
    }
});

portSchema.index({ coordinates: '2dsphere' });
module.exports = mongoose.model('Port', portSchema);