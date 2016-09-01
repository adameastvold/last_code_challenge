//Step 0 -Get our dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Step 1 - create the schema:
var heroSchema = new Schema({
  alias: { type: String, required: true },
  firstName: String,
  lastName: String,
  city: String,
  power_name: String
});

//Step 2 - create the model:
var Hero = mongoose.model('Hero', heroSchema);

//Step 3 - Export our model so we can use it in other parts of our app
module.exports = Hero;
