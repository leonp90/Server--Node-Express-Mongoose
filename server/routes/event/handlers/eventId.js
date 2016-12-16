const mongoose = require('mongoose');
const Event = mongoose.model('Event');

function eventId(req, res){

	const {id} = req.params;

	Event.findById(id)
		.then( event => res.json (event))
		.catch( err=> new Error (err))

}

module.exports = eventId;