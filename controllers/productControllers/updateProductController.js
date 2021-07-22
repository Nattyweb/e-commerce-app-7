//a route to update products records

const express = require('express')
const products = require('../../models/Products')


function updateProduct(req, res, next) {
  
      
	let foundProduct  = products.find(product => product.id == parseInt(req.params.id))
	
	if(!foundProduct) {
	res.status(400).json(`{msg: No record found for id ${req.params.id}}`)
	return;
	}
	
	foundProduct.id = foundProduct.id
	foundProduct.name = req.body.name ? req.body.name : foundProduct.name
	foundProduct.price = req.body.price ? req.body.price : foundProduct.price
	foundProduct.description = req.body.description ? req.body.description : foundProduct.description
	
	res.json({msg: "product updated", foundProduct})
	
	next()
  
}

module.exports = updateProduct