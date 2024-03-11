const mongoose = require("mongoose");
const Apartment = require("../Apartment");

const order = new mongoose.Schema({
  studentID: { type: Number, require: true },
  name: { type: String, require: true },
  surname: { type: String, require: true },
  apartmentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Apartment,
  },
});

module.exports = mongoose.model("Order", order);
