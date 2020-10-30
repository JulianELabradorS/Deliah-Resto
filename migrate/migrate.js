const config = require('../config/index');
const mysql = require('mysql2/promise');

//Models
async function syncTables() {
	try {
		let products = [{}];
		const conection = await mysql.createConnection({
			host: config.dbHost,
			user: config.dbUser,
			password: config.dbPass,
		});
		const requestModel = require('../database/request/models/requestModel');
		const userModel = require('../database/user/models/userModel');
		const productModel = require('../database/product/models/productModel');
		const orderModel = require('../database/order/models/orderModel');
		await conection.query(`CREATE DATABASE IF NOT EXISTS \`${config.dbName}\`;`);
		await userModel.sync();
		await requestModel.sync();
		await productModel.sync();
		await orderModel.sync();
		await userModel.create(config.root_user);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
	process.exit(0);
}

syncTables();
