const mongoose = require("mongoose");

const apartment = new mongoose.Schema({
  name: {type: String, require: true}
})

module.exports = mongoose.model("Apartment", apartment);