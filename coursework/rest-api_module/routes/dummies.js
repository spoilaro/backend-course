const express = require("express");
const router = express.Router();
const Dummy = require("../models/dummy");

//Get all
router.get("/", async (req, res) => {
  try {
    const dummies = await Dummy.find();
    res.json(dummies);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

//Get one
router.get("/:id", getDummy, (req, res) => {
  res.send(res.dummy.name);
});

//Create
router.post("/", async (req, res) => {
  const dummy = new Dummy({
    name: req.body.name,
    dummyToChannel: req.body.dummyToChannel,
  });
  try {
    const newDummy = await dummy.save();
    res.status(201).json(newDummy);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

//Update
router.patch("/:id", (req, res) => {});

//Delete
router.delete("/:id", (req, res) => {});

async function getDummy(req, res, next) {
  let dummy;
  try {
    dummy = await Dummy.findById(req.param.id);
    if (dummy == null) {
      return res.status(404).json({ msg: "Can't find dummy" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }

  res.dummy = dummy;
  next();
}

module.exports = router;
//TODO
