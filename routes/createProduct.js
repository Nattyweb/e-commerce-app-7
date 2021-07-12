//a route to create a product and add to the arrayof produccts.

const express = require('express')
const products = require('../Products')
const createProduct = express.Router()


//create new product

createProduct.post('/', (req, res) => {

	//check if the user entered the required data
	if(!req.body.name || !req.body.desription || !req.body.price) {
		res.status(400).json({msg: "Enter the name, description and  the price of the product you want to add"})
	}
	else {
	let newProduct = {
		id: products.length + 1,
		name: req.body.name,
		description: req.body.description,
		price:  parseInt(req.body.price)
	}

	//add the new product to the product array
	products.push(newProduct);

	res.status(200).json({msg: "product added", products})
}
});

module.exports = createProduct
