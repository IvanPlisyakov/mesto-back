const express = require('express');
const mongoose = require('mongoose');
const routerCards = require('./routes/cards.js');
const routerUsers = require('./routes/users.js');
const path = require('path');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});

app.use(express.static(path.join(__dirname, 'public', "build")));
app.use('/', routerCards);
app.use('/', routerUsers)


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

