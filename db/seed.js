// for testing database data 
const mongoose = require('./connection')

const tripSeeds = require('./tripSeeds.json')
const userSeeds = require('./userSeeds.json')

const Trip = require('../models/Trip')
const User = require('../models/User')
 
Trip.deleteMany({}) //delete all trips from db
Trip.insertMany(tripSeeds)
    .then (console.log)
    .catch(console.error)

User.deleteMany({}) //delete all Users from db
User.insertMany(userSeeds)
    .then (console.log)
    .catch(console.error)
    .finally(() => { process.exit() }) 

