const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({

  player : {
    type: String
  },

  score: {
    type: Number
  }

})

module.exports = scoreSchema;
