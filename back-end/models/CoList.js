const mongoose = require("mongoose");

const CoListSchema = new mongoose.Schema({
  Title: { 
    type: String, 
    required: true},
  Description: { 
    type: String, 
    required: true},

});

const CoList = mongoose.model("CoList", CoListSchema);

module.exports = CoList;
