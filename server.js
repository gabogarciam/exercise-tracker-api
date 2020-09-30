const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send(`<h1>Exercise Tracker API</h1>Server is running on port: ${port}`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).json({code: 'not found'});
});

// start the server listening for requests
app.listen(port, () => { console.log(`Server is running on port: ${port}`) });