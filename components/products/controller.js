const { response } = require('express');
const productModel = require('../../database/product/models/productModel');

const createProduct = (data) => {
	return new Promise((res, rejc) => {
		productModel
			.create(data)
			.then((product) => {
				res(product);
			})
			.catch((error) => {
				if ((error.name = 'SequelizeValidationError')) {
					rejc({ status: 400, message: `el campo ${error.errors[0].path} no fue enviado` });
				} else {
					rejc({ status: 500, message: 'UPS!! tenemos problemas intenta de nuevo mas tarde' });
				}
			});
	});
};

const updateProductById = (id, data) => {
	return new Promise((res, rejc) => {
		productModel
			.update(data, { where: { id: id } })
			.then((response) => {
				if (response[0] === 1) {
					res({ message: 'El producto fue actualizado' });
				} else {
					rejc({ status: 400, message: 'No se Pudo actualizar el producto.' });
				}
			})
			.catch((error) => {
				rejc({ status: 500, message: 'Intente de nuevo mas tarde.' });
			});
	});
};

const deleteProduct = (id) => {
	return new Promise((res, rejc) => {
		productModel
			.destroy({ where: { id: id } })
			.then((response) => {
				if (response === 1) {
					res({ message: 'producto eliminado' });
				} else {
					rejc({ status: 400, message: 'el producto no existe, no puede ser eliminado' });
				}
			})
			.then((error) => {
				rejc({ status: 500, message: 'UPS!! tenemos problemas intenta de nuevo mas tarde' });
			});
	});
};
module.exports = {
	createProduct,
	updateProductById,
	deleteProduct,
};
