const mongoose = require("mongoose");

const dummySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dummyToChannel: {
    type: String,
    required: true,
  },
  dummyDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Dummy", dummySchema);
