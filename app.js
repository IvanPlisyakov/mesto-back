const express = require('express');
const routerCards = require('./routes/cards.js');
const routerUsers = require('./routes/users.js');
const path = require('path');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', routerCards);
app.use('/', routerUsers)


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

