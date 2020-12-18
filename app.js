const express = require('express');
const router = require('./routes/cards.js');
const usersId = require('./routes/users.js');
const path = require('path');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.use('/', usersId)


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

