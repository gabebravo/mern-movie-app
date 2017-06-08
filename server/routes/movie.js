const express = require('express');
const router  =  express.Router();
const mongoose = require('mongoose');

const movieSchema = require('../schemas/movie');
const Movie = mongoose.model('movies', movieSchema);

function getMovies(req, res) {
  Movie.find((err, movies) => {
    if (err) {
      console.log('err');
      res.status(500).send(err);
    }
    if (!movies) {
      console.log('no movies');
      res.sendStatus(404);
    }
    res.status(200).json(movies);
  });
}

// controllers
router.get('/', getMovies);

//export Directory
module.exports = router;
