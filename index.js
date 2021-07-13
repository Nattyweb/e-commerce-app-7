// Landing route for all request
/* Home route = /   [GET]
 * read all product = /products  [GET]
 * read specific product = /products/id  [GET]
 * create product = /create   [POST]
 * update product = /update/id   [PUT]
 * delete product = /delete/id   [DELETE]
 */


const express = require('express')
const app = express()


//parse body content
app.use(express.json())

app.get('/', (req, res) => {
	res.send('<h1>Welcome to Our Products Page. We have all kinds of goods that meet your taste</h1>')
})

//read products routes
app.use('/products', require('./routes/readProduct'))

//create products routes
app.use('/create', require('./routes/createProduct'))

//update record of product route
app.use('/update', require('./routes/updateProduct'))

//delete product route
app.use('/delete', require('./routes/deleteProduct'))

//no matching routes
app.get('/*', (req, res) => res.status(200).send('<h1>No marching url, check your url</h1>'))



const PORT = 8000
app.listen(PORT, () => console.log(`Server running...`));
