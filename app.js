const express = require('express')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');

//Express appS
const app = express()

//Establishing connection to server
const dbUri = "mongodb+srv://mrdragon2112:dragon69@cluster0.cdykn.mongodb.net";
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000), console.log('Server started! Connected to database established!'))
    .catch((err) => console.log(err))

app.use(express.json());

const userRouter = require('./routes/users')
app.use('/users', userRouter)