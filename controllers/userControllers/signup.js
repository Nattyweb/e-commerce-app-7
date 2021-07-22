
const express = require('express')
const users = require('../../models/Users')
const Joi = require('joi')

function signup(req, res, next) {
  //validate user imput
  let schema = {
    fullName: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirmPassword: Joi.ref('password')
  }
  
  const result = Joi.validate(req.body,schema);
  
  //if user imput is not valid, throw error
  if(result.error) {
    res.status(400).send(result.error.details[0].message)
    return;
  }
  
  //if all imputs are ok, check if the email entered already exist in the user database
  const emailExist = users.find(user => user.email === req.body.email);
  
  if(emailExist) {
    res.status(400).json({msg: 'email entere already exist.'})
    return;
  }
  
  const {email, fullName, password,} = req.body
  let newUser = {
    id: users.length + 1,
    email,
    fullName,
    password
  }
  
  users.push(newUser)
  res.status(201).json({msg: 'You are now registered', newUser})
  
  next()
}

module.exports = signup