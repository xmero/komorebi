const fs = require('fs');
const thereIsDotEnv = fs.existsSync('.env')
if ( thereIsDotEnv ) require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


global.__base = __dirname + '/server/'

mongoose.Promise = global.Promise

const routerUpload = require('./server/routes/uploadImg')

const routerUsers = require('./server/routes/users')
const routerProducts = require('./server/routes/products')
const routerMail = require('./server/routes/mail')
const routerMessaging = require('./server/routes/messaging')

const routesAuth = require('./server/routes/auth')
const routesPrivate = require('./server/routes/private')

const PORT = process.env.PORT || 3000
const app = express()

const publicFolder = path.join(__dirname, 'public')

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/fproject'
mongoose.connect(urlDB)

app
  .use(express.static(publicFolder))

  .use('/api', routesAuth )
  .use('/private', routesPrivate )
  .use('/messages', routerMessaging)

  .use('/products/api', routerProducts)
  .use('/users/api', routerUsers)
  .use('/sendmail', routerMail)

  .use('/upload',routerUpload)

  

  .listen(PORT, () => console.log(`Magic happens on Port ${PORT}...`))