const mongoose = require("mongoose");

const AdoptionSchema = new mongoose.Schema({
  petName: String,
  adopterName: String
});

module.exports = mongoose.model("Adoption", AdoptionSchema);