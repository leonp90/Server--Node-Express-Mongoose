const Event = require('../../../models/event')

function createEvent(req, res) {

		// const {activity, date, time, experience, space, notes, users} = req.body;
		const data = req.body;

		const newEvent = new Event(data);
			newEvent.save((err, Event) =>{
				if(err) return (err)
					console.log("Event saved")
			})
			res.status(500)
}

module.exports = createEvent;