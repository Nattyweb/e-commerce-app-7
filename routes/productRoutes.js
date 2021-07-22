
const express = require('express')
const router = express.Router()
const viewProduct = require('../controllers/productControllers/viewProductController')
const createProduct = require('../controllers/productControllers/createProductController')
const updateProduct = require('../controllers/productControllers/updateProductController')
const deleteProduct = require('../controllers/productControllers/deleteProductController')

//view all products 
router.get('/', viewProduct)

//view specific products
router.get('/:id', viewProduct)

//create new products
router.post('/', createProduct)

//update Product
router.put('/:id', updateProduct)

//delete Product
router.delete('/:id', deleteProduct)

module.exports = router