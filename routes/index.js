const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send(`Hello from Exercise-Tracker API`);
});

module.exports = router;