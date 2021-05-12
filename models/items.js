const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  category: String,
  name: String,
  desc: String,
  completeStatus: Boolean,
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
