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
    //changed this to true for easier testing but
    //we can go back to false if we want.
    default: true
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
