const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// define the first route
app.get("/", function (req, res) {
    res.send("<h1>Exercise Tracker API</h1>");
    console.log('Exercise Tracker API');
});

// start the server listening for requests
app.listen(port, () => { console.log(`Server is running on port: ${port}`) });