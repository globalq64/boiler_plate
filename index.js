const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://globalq:1004@cluster0.2rbg4.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then( () => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World !! ////'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))