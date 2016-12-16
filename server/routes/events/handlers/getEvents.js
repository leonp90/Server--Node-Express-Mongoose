const Event = require('../../../models/event')

function getEvents(req, res) {

		Event.find({})
		.then((events)=>res.json(events))
		.catch( console.log )

}

module.exports = getEvents;