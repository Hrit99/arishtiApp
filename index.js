var mongoose = require('mongoose');
  
const express = require('express')
const morgan = require('morgan')
const userRoute = require('./routes/userRoute')

var mongoDB = 'mongodb+srv://hritik:hritikpassword@cluster0.jtmil.mongodb.net/users?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;


db.once('open', () => {
    console.log('Database connected');
  })
  

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connection', (stream) => {
    console.log('someone connected!');
  });


  const app = express()

  app.use(morgan('dev'))

  const port = process.env.PORT||3000

app.listen(port, () => {
  console.log('server is running')
})

app.use('/user', userRoute)