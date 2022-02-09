const mongoose = require('mongoose')


const TripSchema = new mongoose.Schema({
    budget: Number,
    cost: Number,
    lodging: {
        title: String,
        cost: Number
    },
    food: {
        title: String,
        cost: Number
    },
    transport: {
        title: String,
        cost: Number
    },
    other: {
        title: String,
        cost: Number
    }
})

const Trip = mongoose.model('Trip', TripSchema)

module.exports = Trip