const sequelize = require('./database/index');
const config = require('./config/index');

//Models
const requestModel = require('./database/request/models/requestModel');
const userModel = require('./database/user/models/userModel');
const productModel = require('./database/product/models/productModel');
const orderModel = require('./database/order/models/orderModel');
async function syncTables() {
	try {
		await userModel.sync();
		await requestModel.sync();
		await productModel.sync();
		await orderModel.sync();

		await userModel.create(config.root_user);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

syncTables();
