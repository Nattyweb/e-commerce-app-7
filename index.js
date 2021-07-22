


const express = require('express')
const app = express()

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')


//body parser
app.use(express.json())

//home route
app.get('/', (req, res) => {
	res.send('<h1>Welcome to Our Products Page. We have all kinds of goods that meet your taste. Visit /users/signin to login if you have registered or /users/signup to register.</h1>')
})

//user routes
app.use('/user', userRoutes)

//products routes
app.use('/product', productRoutes)


//no matching routes
app.get('/*', (req, res) => res.status(200).send('<h1>No marching url, check your url and try again</h1>'))



const PORT = 8000
app.listen(PORT, () => console.log(`Server running...`));
