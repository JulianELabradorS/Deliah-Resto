const requestModel = require('../../database/request/models/requestModel');
const userModel = require('../../database/user/models/userModel');
const productModel = require('../../database/product/models/productModel');
const orderModel = require('../../database/order/models/orderModel');

let users = [
	{
		name: 'Gae Dumbell',
		email: 'gdumbell0@ft.com',
		password: '9bE7qKl6',
		telephone: '675-578-7138',
		address: '3 Anzinger Point',
		isAdmin: false,
	},
	{
		name: 'Becky Rowswell',
		email: 'browswell1@printfriendly.com',
		password: '9hvrXiIKUcI',
		telephone: '530-267-4818',
		address: '172 Amoth Park',
		isAdmin: false,
	},
	{
		name: 'Zak Longthorne',
		email: 'zlongthorne2@spotify.com',
		password: 'EwQEHQ',
		telephone: '262-152-2218',
		address: '0582 Farragut Pass',
		isAdmin: false,
	},
	{
		name: 'Lottie Duding',
		email: 'lduding3@pen.io',
		password: 'xxNEegUI',
		telephone: '554-760-1282',
		address: '07424 Westerfield Street',
		isAdmin: false,
	},
	{
		name: 'Shanna Tottie',
		email: 'stottie4@jalbum.net',
		password: 'jDOrez4q',
		telephone: '228-414-8997',
		address: '11210 Nelson Pass',
		isAdmin: false,
	},
];
userModel
	.bulkCreate(users)
	.then(() => {
		console.log('Usuarios creados');
		process.exit(0);
	})
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
