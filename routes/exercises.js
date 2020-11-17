const router = require('express').Router();
const Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then((exercices) => res.json(exercices))
    .catch((err) => res.status(400).json(`Erorr: ${err}`));
});

router.route('/add').post((req, res) => {
  const { username } = req.body;
  const { description } = req.body;
  const { duration } = req.body;
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
