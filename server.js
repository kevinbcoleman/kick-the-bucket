/* -------------------
    Dependencies
---------------------*/
const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

//PORT: Allow the use of Heroku's port or your own loacl port, depending on the environment
const PORT = process.env.PORT || 3003

//DATABASE: Connect to the database via heroku or locally
const PROJECT3_DB = process.env.MONGODB_URI

//Middleware:
app.use(express.json())
app.use(express.static('public'))

//CONTROLLERS:
const itemsController = require('./controllers/item_controller.js')
app.use('/bucketitems', itemsController)
const usersController = require('./controllers/user_controller.js')
app.use('/users', usersController)

//ROUTES:
app.get('/', (req, res) => {
  res.redirect('/items')
  // res.redirect('/items');
});

//LISTENER:
app.listen(PORT, () => console.log('Listening on port:', PORT));

//connection:
mongoose.connect(PROJECT3_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

// Error / success
mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', PROJECT3_DB)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
/* mongodb+srv://<username>:<password>@project2.ymbaa.mongodb.net/kickTheBucket?retryWrites=true&w=majority*/
