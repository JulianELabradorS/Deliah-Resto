const jwt = require('jsonwebtoken');
const config = require('../config/index');
const autentication = (req, res, next) => {
	let authorization = req.headers.authorization;
	if (authorization) {
		let token = authorization.split(' ')[1];
		jwt.verify(token, config.jwtsecret, (error, decoded) => {
			if (error) {
				res.status(401).json('token no valido');
			}
			req.usuario = decoded;
			next();
		});
	} else {
		res.status(401).json({ message: 'por favor ingresa con tu usuario y contraseña' });
	}
};

module.exports = autentication;
