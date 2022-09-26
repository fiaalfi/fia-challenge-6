const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 4000;
app.use(cors())

app.set('view engine', 'ejs')

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/game', (req, res) => {
  res.render('main')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

// Routes import
const authRoute = require('./routes/auth')

// Router
app.use('/v1/auth', authRoute)

// validator 
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({message, data})
})

mongoose.connect('mongodb+srv://fia:Oi49vWhNHZ1LHTIr@cluster0.cf3aegq.mongodb.net/?retryWrites=true&w=majority')
  .then(()=> {
    app.listen(port, ()=>{
      console.log(`fia server is running...`)
    })
  })
  .catch(err => console.log(err))