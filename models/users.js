const mongoose = require('mongoose')
const Item = require('./items.js')

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  bucketItems: [Item.schema]
})

const User = mongoose.model('User', userSchema)

module.exports = User
