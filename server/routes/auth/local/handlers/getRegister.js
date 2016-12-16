function getRegister(req, res){
	let title = "Marenostrum - Registrate";
	res.render('register', {title});
}

module.exports = getRegister;