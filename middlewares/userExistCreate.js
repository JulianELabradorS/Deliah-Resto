const { users } = require('../db');
const userExistCreate = (req, res, next) => {
	const email = req.body.email;
	let exist = users.filter((user) => {
		return user.email === email;
	});
	if (exist.length) {
		return res.status(200).json('este usuario ya existe');
	} else {
		next();
	}
};

module.exports = userExistCreate;
