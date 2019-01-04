const mongoose = require("mongoose");
const db = require("../db/connection");

const ideaSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  details: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const ideas = mongoose.model("ideas", ideaSchema);

const insertData = () => {};

module.exports = ideas;
