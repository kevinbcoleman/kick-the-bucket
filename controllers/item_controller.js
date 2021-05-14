const express = require('express')
const bucketItems = express.Router()
const Item = require('../models/items.js')
const User = require('../models/users.js')


//Index Route:
bucketItems.get('/', (req,res) => {
  Item.find({}, (error, foundItems) => {
    res.json(foundItems)
  })
})

// //Activities Feed:
// bucketItems.get('/public', (req,res) => {
//   Item.find({public:true}, (error, publicItems) => {
//     res.json(publicItems)
//   })
// })

//create route:
bucketItems.post('/', (req,res) => {
  User.findOne({username: req.body.currentUser.username}, (error, foundUser) => {
    console.log(foundUser)
    Item.create(req.body, (error, createdItem) => {
      foundUser.bucketItems.push(createdItem)
      foundUser.save((error, data) => {
        res.json(data)
      })
    })
  })
})

//edit and update route:
bucketItems.put('/:id', (req,res) => {
  Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (error, updatedItem) => {
      User.findOne({username: req.body.currentUser.username}, (error, foundUser) => {
        foundUser.bucketItems.id(req.params.id).remove()
        foundUser.bucketitems.push(updatedItem)
        foundUser.save((error, data) => {
          res.json(data)
        })
      })
    }
  )
})

//delete route:
bucketItems.delete('/:id', (req,res) => {
  Item.findByIdAndRemove(req.params.id, (error, deletedItem) => {
    Item.find({}, (error, foundItems) => {
      res.json(foundItems)
    })
  })
})

module.exports = bucketItems
