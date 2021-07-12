//a route to update products api records

const express = require('express')
const products = require('../Products')
const updateRecord = express.Router()


updateRecord.put('/:id', (req, res) => {
      
	let found  = products.some(product => product.id === parseInt(req.params.id))
	
	if(found) {
		products.forEach(product => {
			if(product.id === parseInt(req.params.id)) {
		
		product.id = product.id
		product.name = req.body.name ? req.body.name : product.name
		product.price = req.body.price ? req.body.price : product.price

	         res.json({msg: "product updated", product})
	}

	else {
		res.status(400).json(`{msg: No record found for id ${req.params.id}}`)
	}})
}})

module.exports = updateRecord

