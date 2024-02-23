require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.js');
const cors = require('cors');
// const fun = require('./controllers/userControllers.js');
// executing instance of express
const app = express();

// express middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

// initializing connection to DB
connectToDb();

const userRoutes = require('./routes/userRoutes.js')

// starting server
app.use('/',userRoutes);

module.exports = app;
