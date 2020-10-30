require('dotenv').config();

const config = {
	port: process.env.API_PORT,
	dbHost: process.env.DATABASE_HOST,
	dbName: process.env.DATABASE_NAME,
	dbUser: process.env.DATABASE_USER,
	dbPass: process.env.DATABASE_PASS,
	jwtsecret: process.env.JWT_SECRET,
	root_user: {
		name: process.env.USER_NAME,
		email: process.env.USER_EMAIL,
		password: process.env.USER_PASSWORD,
		telephone: process.env.USER_PHONE,
		address: process.env.USER_ADDRESS,
		isAdmin: process.env.USER_ADMIN,
	},
};
module.exports = config;
