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
const PROJECT3_DB =  process.env.PROJECT3_DB

//Middleware:
app.use(express.static('public'))
app.use(express.json())

//CONTROLLERS:


//ROUTES:
app.get('/' , (req, res) => {
  res.send('Hello World.')
  // res.redirect('/items');
});

//LISTENER:
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
