// a controller to delete a product from the products database
// a controller to delete a product from the products database

const express = require('express')
const products = require('../../models/Products')


function deleteProduct(req, res, next) {

	//check whether product to be deleted exist
	let foundProduct = products.find(product => product.id == parseInt(req.params.id));

	//if product does not exist, 
	if(!foundProduct) {
	  res.status(400).json(`{msg: Error! No product with id ${req.params.id}`)
	}
	
	//if product exist
	const foundProductIndex = products.indexOf(foundProduct);
	newProductsList = products.splice(foundProductIndex, 1);
	
	res.status(201).json({msg: "product deleted", newProductsList})
	
	next()
}

module.exports = deleteProduct