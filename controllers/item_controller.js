const express = require('express')
const bucketItems = express.Router()
const Item = require('../models/items.js')
const User = require('../models/users.js')

//Display Route:
bucketItems.get('/', (req,res) => {
  res.send('This is the display for bucket list items.')
})

module.exports = bucketItems
