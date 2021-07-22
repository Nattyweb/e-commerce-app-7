
//a controller to create new product
const express = require('express')
const products = require('../../models/Products')


function createProduct(req, res, next) {

	//check if the user entered the required data
	if(!req.body.name || !req.body.description || !req.body.price) {
		res.status(400).json({msg: "Enter the name, description and  the price of the product you want to add"})
		return;
	}
	
	//if all required data are entered, create new product
	let newProduct = {
		id: products.length + 1,
		name: req.body.name,
		description: req.body.description,
		price:  parseInt(req.body.price)
	}

	//add the new product to the product array
	products.push(newProduct);

	res.status(200).json({msg: "product added", products})
	
	next()
}

module.exports = createProduct