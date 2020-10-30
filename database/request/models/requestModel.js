const { DataTypes } = require('sequelize');
const { models } = require('../../index');
const sequelize = require('../../index');
const productModel = require('../../product/models/productModel');
const userModel = require('../../user/models/userModel');
const requestModel = sequelize.define(
	'requests',
	{
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: userModel,
				key: 'id',
			},
			allowNull: false,
		},
		request_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		pay_method: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);
userModel.hasMany(requestModel);
requestModel.belongsTo(userModel);
module.exports = requestModel;
