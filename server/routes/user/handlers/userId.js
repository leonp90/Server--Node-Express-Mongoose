const User = require('../../../models/user')

function userId(req, res){

	const {id} = req.params;

	User.findById(id)
		.then( user => res.json (user))
		.catch( err=> new Error (err))

}

module.exports = userId;