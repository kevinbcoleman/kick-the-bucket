const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  title: String,
  link: String,
  desc: String
})

const idea = mongoose.model('Idea', ideaSchema)

module.exports = Idea
