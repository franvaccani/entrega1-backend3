const express = require("express");
const router = express.Router();
const Adoption = require("../models/Adoption");

// GET all adoptions
router.get("/", async (req, res) => {
  const adoptions = await Adoption.find();
  res.json(adoptions);
});

// POST a new adoption
router.post("/", async (req, res) => {
  const adoption = await Adoption.create(req.body);
  res.status(201).json(adoption);
});

module.exports = router;