const express = require('express')
const bucketIdeas = express.Router()
const Idea = require('../models/ideas.js')
// const User = require('../models/users.js')


//Index Route:
bucketIdeas.get('/', (req,res) => {
  Itdea.find({}, (error, foundIdeas) => {
    res.json(foundIdeas)
  })
})

// //Activities Feed:
// bucketItems.get('/public', (req,res) => {
//   Item.find({public:true}, (error, publicItems) => {
//     res.json(publicItems)
//   })
// })

//create route:
bucketIdeas.post('/', (req,res) => {
    Idea.create(req.body, (error, createdIdea) => {
      Idea.find({}, (error, foundIdeas) => {
        res.json(foundIdeas)
      })
  })
})

//edit and update route:
bucketIdeas.put('/:id', (req,res) => {
    Idea.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      (error, updatedIdea) => {
        Idea.find({}, (error,foundIdeas) => {
          res.json(foundIdeas)
        })
      }
  )
})

//delete route:
bucketIdeas.delete('/:id', (req,res) => {
  Idea.findByIdAndRemove(req.params.id, (error, deletedIdea) => {
    Idea.find({}, (error, foundIdeas) => {
      res.json(foundIdeas)
    })
  })
})

module.exports = bucketIdeas
