require('dotenv').config();
const mongoose = require("mongoose");

const mongoURI = process.env.DATABASE_URL; 
const db = mongoose.connection;
// console.log(mongoURI);

mongoose.connect(mongoURI);

// Connection Error/Success messages

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: remote database in .env'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made! 🐉 🌟');
});

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration and can be exported to other files
module.exports = mongoose;