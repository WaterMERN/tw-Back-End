const mongoose = require("mongoose");
const Expense = require("../models/Expense");

const TripSchema = new mongoose.Schema({
  name: String,
  budget: Number,
  cost: Number,
  length: Number,
  expenses: Array,
  owner: {
    type: String,
    ref: 'User',
    required: true
  }
},
{
  timestamps: true,
}
);

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
