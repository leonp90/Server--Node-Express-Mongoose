function getLogin(req, res){
	const title = "LogIn"
	res.render('login', {title});
}

module.exports = getLogin;