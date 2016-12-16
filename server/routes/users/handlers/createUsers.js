const User = require('../../../models/user')

function createUsers(req, res) {

	const { username, password, email } = req.body;
	// const username = req.body.username;
	// const password = req.body.password;
	const newUserAccount = new Account({ username, email });

	const promisedAccountRegister = (newUserAccount, password) => {
		return new Promise( (resolve, reject) => {
			Account.register( newUserAccount, password, (err, account) => {
				if (err) reject(err)
					resolve(account)
			})
		})
	}

	promisedAccountRegister( newUserAccount, password )
	.then( account => {
		passport.authenticate('local')(req, res, () => {

		  	//res.status(200).json(account) });
		  })
		.catch( err => {
			console.log(err);
			console.log("Something bad happened registering the user...")
		  // return res.render('register', { account : account });
		  res.status(500).json(err)
		})


	})
};

	module.exports = createUsers;