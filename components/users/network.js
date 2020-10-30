const express = require('express');

const { createUser, loginUser } = require('./controller');

//USERS ROUTES
const router = express.Router();
router.post('/crear', (req, res) => {
	const reqUser = req.body;
	reqUser.isAdmin = false;
	createUser(reqUser)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((error) => {
			res.status(error.status).json({ message: error.message });
		});
});
router.post('/login', (req, res) => {
	const { password, email } = req.body;
	loginUser(password, email)
		.then((jwt) => {
			res.status(200).json(jwt);
		})
		.catch((error) => {
			res.status(error.status).json({ message: error.message });
		});
});

module.exports = router;
