function userLogout(req, res){
	console.log(req.body);
	req.logout();
    res.redirect('/');

}

module.exports = userLogout;