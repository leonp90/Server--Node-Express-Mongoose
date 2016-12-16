function getIndex(req, res) {
	let title = "Marenostrum";
	let user = req.user;
	res.render('index', { user, title })
}

module.exports = getIndex;