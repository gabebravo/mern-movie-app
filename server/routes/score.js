const express = require('express');
const router  =  express.Router();
const mongoose = require('mongoose');

const scoreSchema = require('../schemas/score');
const Score = mongoose.model('scores', scoreSchema);

const getScores = (req, res) => {
  Score.find({}).sort({ score: 'desc' }).select({ _id: 0 })
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
  Score.find({}).sort({ score: 'asc' }).limit(1)
    .then( lowestScore => {
      if(req.body.score > lowestScore[0].score) {
        Score.findByIdAndRemove(lowestScore[0]._id)
        .then( () => {
          let newScore = new Score({ player: req.body.player, score: req.body.score });
          newScore.save()
            .then( () => {
              return Score.find({}).sort({ score: 'desc' }).select({ _id: 0 })
            })
        })
      } else {
        return Score.find({}).sort({ score: 'desc' }).select({ _id: 0 })
      }
    })
    .then(scores => {
      res.status(200).json(scores);
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });
}

// controllers
router.get('/', getScores);
router.post('/update', updateScores);

//export Directory
module.exports = router;
