const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  category: String,
  name: String,
  desc: String,
  completeStatus: {
    type: Boolean,
    default: false
  },
  completionDate: {
    type: Date,
    default: Date.now
  },
  public: {
    type: Boolean,
    default: false
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
