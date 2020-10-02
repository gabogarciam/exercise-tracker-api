'use strict'

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB DB connection established succefully');
});

// Routes
const usersRouter = require('./routes/users');
mongoose.set('useCreateIndex', true);
app.use('users', usersRouter);

// start the server listening for requests
app.listen(port, () => { console.log(`Server is running on port: ${port}`) });