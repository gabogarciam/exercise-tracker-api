const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`MongoDB DB connection established succefully, ${x.connections[0].name}`))
  .catch((err) => console.log('Error:', err));
