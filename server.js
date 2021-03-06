const express = require('express');
const helmet = require('helmet');
//ENV
const config = require('./config/index');
//Routes
const userRoutes = require('./components/users/network');
const productsRoutes = require('./components/products/network');
const ordersRoutes = require('./components/orders/network');
//Database
const db = require('./database/index');

//Express
const app = express();
app.use(helmet());
app.use(express.json());

//Routes Implementation
app.use('/user', userRoutes);
app.use('/product', productsRoutes);
app.use('/order', ordersRoutes);

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

//SERVER PORT
app.listen(config.port, () => {
	console.log(`Api escuchando en http://localhost:${config.port}`);
});
