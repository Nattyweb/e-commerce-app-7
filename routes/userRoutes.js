
const express = require('express')
const router = express.Router();
const signIn = require('../controllers/userControllers/signin')
const signUp = require('../controllers/userControllers/signup')

//user sign up Router
router.post('/signup', signUp)

//user sign in router
router.post('/signin', signIn)

module.exports = router