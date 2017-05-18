var mongoose = require("mongoose");

var task = new mongoose.Schema({
	name: String,
	description: String,
	date: Date

});

module.exports = mongoose.model("Task", task);