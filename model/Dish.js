const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dish = new Schema({
    name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 255 },
  });

  module.exports =  mongoose.model('Dish', Dish);