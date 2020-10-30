const { DataTypes } = require('sequelize');
const sequelize = require('../../index');
const requestModel = require('../../request/models/requestModel');
const productModel = require('../../product/models/productModel');

const orderModel = sequelize.define(
	'orders',
	{
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		requestId: {
			type: DataTypes.INTEGER,
			references: {
				model: requestModel,
				key: 'id',
			},
			allowNull: false,
		},
		productId: {
			type: DataTypes.INTEGER,
			references: {
				model: productModel,
				key: 'id',
			},
			allowNull: false,
		},
	},
	{ timestamps: false }
);
productModel.belongsToMany(requestModel, { through: orderModel });
requestModel.belongsToMany(productModel, { through: orderModel });
module.exports = orderModel;
