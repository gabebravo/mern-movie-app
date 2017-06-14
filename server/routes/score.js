const express = require('express');
const router  =  express.Router();
const mongoose = require('mongoose');

const scoreSchema = require('../schemas/score');
const Score = mongoose.model('scores', scoreSchema);

const getScores = (req, res) => {
  Score.find({}).sort({ score: 'descending' }).select({ _id: 0 })
    .then(scores => {
      if (!scores) {
        console.log('no scores');
        res.sendStatus(404);
      }
      res.status(200).json(scores);
    })
    .catch( error => {
      console.log('error');
      res.status(500).send(error);
    })
}

const updateScores = (req, res) => {
  console.log(req.params.player);
  // console.log(req.params.score);
  // Score
  // .findById(req.params.id)
  // .exec()
  // .then(survey => {
  //   res.status(200).json(survey);
  // })
  // .catch(
  //   err => {
  //     console.error(err);
  //     res.status(500).json({message: 'Internal server error'});
  // });
}

// controllers
router.get('/', getScores);
router.post('/update/:player', getScores);

//export Directory
module.exports = router;
