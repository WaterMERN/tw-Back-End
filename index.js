//============
//BASIC CONFIG
//============
const express = require('express');
const cors = require('cors');
const app = express();
require('./db/connection');
const PORT = process.env.PORT
app.set('port', process.env.PORT || 8000);

//==========
//MIDDLEWARE
//==========
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//===========
//ROUTES
//===========
// //Redirect currently commented out believe main page on front end will be create trip 
app.get('/', (req, res) => {
     res.redirect('/trips')
})

//===========
//CONTROLLERS
//===========
const tripController = require('./controllers/tripController');
app.use('/trips', tripController);

// const userController = require('./controllers/userController');
// app.use('/', userController);

//============
//START SERVER
//============
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500; //500 is internal server error
    const message = err.message || "Internal Server Error";
    res.status(statusCode).send(message);
});

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🐲 🌟`);
});
