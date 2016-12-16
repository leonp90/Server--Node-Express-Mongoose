const User = require('../../../models/user')

function getUsers(req, res) {

		User.find({})
		.then((users)=>res.json(users))
		.catch( console.log )

}

module.exports = getUsers;