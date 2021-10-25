// import modules

import express from 'express'
import * as studentDb from './data/student-db.js'
// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.redirect('/students')
})

app.get('/home', function(req,res) {
  res.render('home')
})

app.get('/students', function(req, res) {
  studentDb.find({}, function(error, students) {
    res.render('students/index', {
      students: students,
      error: error
    })
  })
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})