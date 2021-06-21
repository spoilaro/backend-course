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
  res.json(res.dummy);
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
router.patch("/:id", getDummy, async (req, res) => {
  if (req.body.name != null) {
    res.dummy.name = req.body.name;
  }
  if (req.body.dummyToChannel != null) {
    res.dummy.dummyToChannel = req.body.dummyToChannel;
  }
  try {
    const updatedDummy = await res.dummy.save();
    res.json(updatedDummy);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

//Delete
router.delete("/:id", getDummy, async (req, res) => {
  try {
    await res.dummy.remove();
    res.json({ msg: "Dummy deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

async function getDummy(req, res, next) {
  let dummy;
  try {
    console.log(req.param.id);
    dummy = await Dummy.findById(req.params.id);
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
