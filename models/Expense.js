const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  category: String,
  title: String,
  cost: Number
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
