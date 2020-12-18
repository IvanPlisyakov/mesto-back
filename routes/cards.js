const router = require('express').Router(); // создали роутер
const fs = require('fs');
const path = require('path');
//const { nextTick } = require('process');
//const filepath = path.join(__dirname, 'cards.json');
//const {readFile} = require('./read-file.js');
//const  cards  = require('../data/cards.json');
const pahToCards = path.join(__dirname, "../data/cards.json");

router.get('/cards', (req, res) => {
  fs.readFile( pahToCards , (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  res.send(data);
  });
});

module.exports = router;