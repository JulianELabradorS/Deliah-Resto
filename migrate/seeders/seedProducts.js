const productModel = require('../../database/product/models/productModel');
let products = [
	{
		name: 'Onions ',
		description:
			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
		type: 'verdura',
		price: '9729',
		imagen: 'http://dummyimage.com/900x800.jpg/cc0000/ffffff',
	},
	{
		name: 'Sauce ',
		description:
			'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
		type: 'verdura',
		price: '7068',
		imagen: 'http://dummyimage.com/900x800.jpg/5fa2dd/ffffff',
	},
	{
		name: 'Dulce De Leche',
		description:
			'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
		type: 'cake',
		price: '6426',
		imagen: 'http://dummyimage.com/900x800.jpg/cc0000/ffffff',
	},
	{
		name: 'Cookie Chocolate Chip With',
		description:
			'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
		type: 'cake',
		price: '8068',
		imagen: 'http://dummyimage.com/900x800.jpg/cc0000/ffffff',
	},
	{
		name: 'Butter Ripple ',
		description:
			'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
		type: 'cake',
		price: '8304',
		imagen: 'http://dummyimage.com/900x800.jpg/5fa2dd/ffffff',
	},
];
productModel
	.bulkCreate(products)
	.then(() => {
		console.log('productos creados');
		process.exit(0);
	})
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
