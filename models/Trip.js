const mongoose = require("mongoose");
const Expense = require("../models/Expense");

const TripSchema = new mongoose.Schema({
  name: String,
  budget: Number,
  cost: Number,
  length: Number,
  expenses: Array,
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
