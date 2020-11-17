const express = require('express');
const requestModel = require('../../database/request/models/requestModel');
const productModel = require('../../database/product/models/productModel');
const userModel = require('../../database/user/models/userModel');
//CONTROLLER
const { findById, createRequest, updateStateById, deleteById } = require('./controller');
//MIDDLEWARES
const autorization = require('../../middlewares/autorization');
const autentication = require('../../middlewares/autentication');

// ORDER ROUTES
const router = express.Router();
router.get('/getall', autentication, autorization, (req, res) => {
	requestModel
		.findAll({
			include: [
				{
					model: productModel,
					attributes: { exclude: ['id', 'orders'] },
				},
				userModel,
			],
			raw: true,
			nest: true,
			attributes: {
				exclude: ['userId'],
			},
		})
		.then((orders) => {
			res.status(200).json({ orders: orders });
		})
		.catch((error) => {
			req.status(500);
		});
});

//Create order
router.post('/create', autentication, (req, res) => {
	let data = req.body;
	data.request_date = new Date();
	data.state = 'nuevo';
	createRequest(data)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(error.status).json({ message: error.message });
		});
});
router.get('/all', autentication, autorization, (req, res) => {
	requestModel
		.findAll()
		.then((response) => {
			res.status(200).json({ orders: response });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error en servidor' });
		});
});

//Get request by id
router.get('/get/:id', autentication, autorization, (req, res) => {
	let id = req.params.id;
	findById(id)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(error.status).json({ message: error.message });
		});
});

//Update state of request
router.patch('/update/:id', autentication, autorization, (req, res) => {
	let id = req.params.id;
	let data = req.body;
	updateStateById(id, data)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(error.status).json({ message: error.message });
		});
});
router.delete('/delete/:id', autentication, autorization, (req, res) => {
	let id = req.params.id;
	deleteById(id)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(error.status).json({ message: error.message });
		});
});
module.exports = router;
