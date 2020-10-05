const router = require('express').Router();

const port = process.env.PORT || 5000;
/* GET home page. */
router.get('/', function(req, res) {
  res.send(`Hello from Exercise-Tracker API ${port}`);
});

module.exports = router;