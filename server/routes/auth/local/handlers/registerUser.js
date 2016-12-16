const Account = require('../.././../../models/account');
const passport = require('passport');

function registerUser(req, res){

	const { username, password } = req.body

	 Account.register( new Account({ username }), password, (err, account) => {
      if (err) return res.render('register', { account : account });
      passport.authenticate('local')(req, res, () =>  res.redirect('/') );
  });
}

module.exports = registerUser;