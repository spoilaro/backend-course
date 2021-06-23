"use strict";
var mongoose = require("mongoose");
var userModel = new mongoose.Schema({
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
var User = mongoose.model("User", userModel);
module.exports = User;
