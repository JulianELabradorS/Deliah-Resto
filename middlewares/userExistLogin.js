const { users } = require('../db');
const userExistLogin = (req, res, next) => {
	const email = req.body.email;
	let exist = users.filter((user) => {
		return user.email === email;
	});
	if (exist.length) {
		next();
	} else {
		return res.status(200).json('No existe un usuario con este Email');
	}
};

module.exports = userExistLogin;
