const Adoption = require("../models/Adoption");

const getAllAdoptions = async (req, res) => {
  const adoptions = await Adoption.find();
  res.json(adoptions);
};

const createAdoption = async (req, res) => {
  const newAdoption = await Adoption.create(req.body);
  res.status(201).json(newAdoption);
};

module.exports = {
  getAllAdoptions,
  createAdoption,
};