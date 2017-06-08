const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

  id: {
    type : String
  }

});

module.exports = movieSchema;
