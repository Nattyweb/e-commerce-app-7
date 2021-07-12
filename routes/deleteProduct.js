// a route to delete a product records from the products api

const express = require('express')
const products = require('../Products')
const deleteRecords = express.Router()


deleteRecords.delete('/:id', (req, res) => {

	//check whether product to be deleted is in array
	
	let found = products.some(product => product.id === parseInt(req.params.id));

	//if in array, filter out

	if(found) {
		products.filter(product => product.id != parseInt(req.params.id))
		res.json({msg: "product deleted", products})
	}

	//if not tell the user the product does not exist
	

	else {
		res.status(400).json(`{msg: Error! No product with id ${req.params.id}`)
	};

});

module.exports = deleteRecords

