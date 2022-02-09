const express = require('express')

const router = express.Router()
const Trip = require('../models/Trip')
// console.log(Trip)
// const { requireToken } =require('../middleware/authorization')
// const res = require('express/lib/response')
// add require token in after all route testing and  authorization built Stretch

//get all trips
router.get("/", async (req, res, next) => {
    try{
        const trip = await Trip.find({});
        console.log(res.json(trip)); 
    } catch (err) {
        next(err);
    }
});

//Get one trip by id
router.get("/:id", async (req, res, next) => {
    try {
        const oneTrip = await Trip.findById(req.params.id);
        res.json(oneTrip);
    } catch (err){
        next(err);
    }
});

//Add a new trip based on the body of the request
router.post("/", async (req, res, next) => {
    try {
        const newTrip = await Trip.create(req.body);
        res.status(201).json(newTrip);
    } catch (err) {
        next(err);
    }
});

//Updating trip data, specify which one by ID
router.put("/:id", async (req, res, next) => {
    try {
        const tripToUpdate = await Trip.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(tripToUpdate);
    } catch (err) {
        next(err);
    }
});

router.patch("/:id", async (req, res, next) => {

    try {
        const tripToUpdate = await Trip.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(tripToUpdate);
    } catch (err) {
        next(err);
    }
});

//Delete a trip, specify which one by ID
router.delete("/:id", async (req, res, next) => {
    try {
        const tripToDelete = await Trip.findByIdAndDelete(
            req.params.id
        );
        if(tripToDelete) {
            res.sendStatus(204); 
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router