const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const mongoose = require('mongoose')
const User = require('../models/users.js')

// since its a single page app.......does that mean I should only have an add route??? No edit route. My brain..... says no

// there is no getting rid of your account on this app. If you wanna leave, then die...hence the Kick the Bucket title

//path '/users/signup': creating a new user
users.post('/', (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

  User.create(req.body, (error, createdUser) => {
    if (error) {
      console.log(error)
    } else {
      console.log('user is created: ', createdUser);
      res.json(createdUser)
    }
  })
})

//path '/users/signin': log in the user, find the user.
users.get('/signin', (req, res) => {
  User.findOne({ username: req.body.username }, (error, foundUser) => {
    if (error) {
      console.log(error);
    } else if (!foundUser) {
      console.log('Wow....User not found.');
    } else {
      if (bcyrpt.compareSync(req.body.password, foundUser.password)) {
        console.log(foundUser);
        res.json(foundUser)
      } else {
        console.log('password does not match. Try again.');
      }
    }
  })
})




module.exports = users
