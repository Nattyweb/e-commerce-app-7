//read products

const express = require('express')
const products = require('../Products')
const readProducts = express.Router()


//read all products
readProducts.get('/', (req, res) => {
	res.json(products);
});


//read specific product(s)
readProducts.get('/:id', (req, res, next) => {
	let found = products.find(product => product.id === parseInt(req.params.id))

	if(found){
		res.json(products.filter(product => product.id === parseInt(req.params.id)))
	}
	else {
		res.status(400).json(`{msg: No product found for id ${req.params.id}}`)

	}
next()
}
);

module.exports = readProducts
