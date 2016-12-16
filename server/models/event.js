const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var eventSchema = new Schema({
	title: String,
	start: Date,
	time: Date,
	experience: String,
	space: Number,
	notes: String,
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Event', eventSchema);

