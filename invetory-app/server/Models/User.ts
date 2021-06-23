const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  items: [
    {
      name: {
        type: String,
        require: true,
      },
      amount: {
        type: Number,
        require: true,
      },
      created: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const User = mongoose.model("User", userModel);

module.exports = User;
