
const express = require('express')
const users = require('../../models/Users')

function signin(req, res, next) {
  let {email, password} = req.body
  
  //check if user email exist
  let foundUser = users.find(user => user.email === email)
  
  if(!foundUser) {
    res.status(400).json({msg: `No accout found for ${email}`})
    return;
  }
  
  //if user is found, check if password is correct
  if(foundUser.password != password) {
    res.status(400).json({msg: 'Wrong password'})
    return;
  }
  //if password is correct, sign user in
  res.status(200).json({msg: 'You are now signed in', foundUser})
  next()
}

module.exports = signin