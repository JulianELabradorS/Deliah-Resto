const productModel = require('../../database/product/models/productModel');
const requestModel = require('../../database/request/models/requestModel');
const userModel = require('../../database/user/models/userModel');
const orderModel = require('../../database/order/models/orderModel');

// create request
const createRequest = (data) => {
	return new Promise((res, rejc) => {
		if (data.products && Array.isArray(data.products)) {
			const { products, ...request } = data;
			requestModel
				.create(request)
				.then((request) => {
					Promise.all(
						products.map((product) => {
							return request.addProducts(product.productId, { through: { quantity: product.quantity } });
						})
					)
						.then((response) => {
							res(request);
						})
						.catch((error) => {
							requestModel.destroy({ where: { id: request.id } });
							if (error.name === 'SequelizeForeignKeyConstraintError') {
								rejc({ status: 400, message: 'No se pudo crear la orden, el producto no existe.' });
							} else {
								rejc({ status: 500, message: 'UPS!! tenemos problemas intenta de nuevo mas tarde' });
							}
						});
				})
				.catch((error) => {
					if (error.name === 'SequelizeForeignKeyConstraintError') {
						rejc({ status: 400, message: 'No se pudo crear la orden, el usuario no existe.' });
					} else {
						rejc({ status: 500, message: 'UPS!! tenemos problemas intenta de nuevo mas tarde' });
					}
				});
		} else {
			rejc({ status: 400, message: 'Campos enviados no validos' });
		}
	});
};

//find request by id(controller)
const findById = (reqid) => {
	return new Promise((res, rejc) => {
		if (!reqid) {
			rejc({ status: 400, message: 'Faltan el id, por favor envielo' });
		} else {
			requestModel
				.findAll({
					where: { id: reqid },
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
				.then((response) => {
					if (response.length === 0) {
						rejc({ status: 400, message: `No existe un producto con id ${reqid}` });
					} else {
						const data = { ...response[0] };
						data.products = [];
						response.forEach((element) => {
							data.products.push(element.products);
						});
						res(data);
					}
				})
				.catch((error) => {
					rejc({ status: 500, message: 'Error interno' });
				});
		}
	});
};

//Update state request
const updateStateById = (id, data) => {
	return new Promise((res, rejc) => {
		if (data.hasOwnProperty('state') && id) {
			requestModel
				.update({ state: data.state }, { where: { id: id } })
				.then((response) => {
					if (response[0] === 1) {
						res('Estado de el pedido actualizado');
					} else {
						rejc({ status: 400, message: 'No se Pudo actualizar tu pedido.' });
					}
				})
				.catch((error) => {
					rejc({ status: 500, message: 'intente de nuevo mas tarde.' });
				});
		} else {
			rejc({ status: 400, message: 'Campos no validos' });
		}
	});
};
module.exports = {
	findById,
	createRequest,
	updateStateById,
};
