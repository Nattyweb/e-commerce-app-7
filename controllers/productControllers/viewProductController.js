//read products

const express = require('express')
const products = require('../../models/Products')


//view all products
module.exports.viewAllProducts = function (req, res, next) {
	res.status(201).json(products);
	next();
};


//view specific product(s)
module.exports.viewSpecificProduct = function (req, res, next) {
	let found = products.find(product => product.id === parseInt(req.params.id))

	if(!found) {
	  res.status(400).json(`{msg: No product found for id ${req.params.id}}`)
	  return;
	}
	
	res.status(201).json(found)
next()
}
