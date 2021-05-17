const express = require('express')
const bucketItems = express.Router()
const Item = require('../models/items.js')
<<<<<<< HEAD
// const User = require('../models/users.js')


//Index Route:
bucketItems.get('/', (req,res) => {
=======
const User = require('../models/users.js')
const itemSeed = require('../models/item_seed.js')



//Index Route:
bucketItems.get('/', (req, res) => {
>>>>>>> c3cc2e10a674dd3873fcc11f65d39f0811676cde
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
<<<<<<< HEAD
bucketItems.post('/', (req,res) => {
=======
bucketItems.post('/', (req, res) => {
  let currentUser = req.body.currentUser

  if (currentUser) {
    User.findOne({ username: currentUser.username }, (error, foundUser) => {
      console.log(foundUser)
      Item.create(req.body, (error, createdItem) => {
        foundUser.bucketItems.push(createdItem)
        foundUser.save((error, data) => {
          res.json(data)
        })
      })
    })
  } else {
>>>>>>> c3cc2e10a674dd3873fcc11f65d39f0811676cde
    Item.create(req.body, (error, createdItem) => {
      Item.find({}, (error, foundItems) => {
        res.json(foundItems)
      })
<<<<<<< HEAD
  })
})

//edit and update route:
bucketItems.put('/:id', (req,res) => {
    Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      (error, updatedItem) => {
        Item.find({}, (error,foundItems) => {
          res.json(foundItems)
        })
      }
  )
})

//delete route:
bucketItems.delete('/:id', (req,res) => {
=======
    })
  }
})

//edit and update route:
bucketItems.put('/:id', (req, res) => {
  let currentUser = req.body.currentUser

  if (currentUser) {
    Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedItem) => {
        User.findOne({ username: currentUser.username }, (error, foundUser) => {
          foundUser.bucketItems.id(req.params.id).remove()
          foundUser.bucketitems.push(updatedItem)
          foundUser.save((error, data) => {
            res.json(data)
          })
        })
      }
    )
  } else {
    Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedItem) => {
        Item.find({}, (error, foundItems) => {
          res.json(foundItems)
        })
      }
    )
  }
})

//delete route:
bucketItems.delete('/:id', (req, res) => {
>>>>>>> c3cc2e10a674dd3873fcc11f65d39f0811676cde
  Item.findByIdAndRemove(req.params.id, (error, deletedItem) => {
    Item.find({}, (error, foundItems) => {
      res.json(foundItems)
    })
  })
})

<<<<<<< HEAD
=======
//Seed Insertion: Commented out to prevent reseeding.

// Item.insertMany(itemSeed)


>>>>>>> c3cc2e10a674dd3873fcc11f65d39f0811676cde
module.exports = bucketItems
