const { DataTypes } = require('sequelize');
const sequelize = require('../../index');
const requestModel = require('../../request/models/requestModel');
const productModel = sequelize.define(
	'products',
	{
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(300),
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		imagen: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);
module.exports = productModel;
