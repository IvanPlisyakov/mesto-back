const usersId = require('express').Router(); // создали роутер
//const { users } = require('../data/users.json'); // данные нужны для роутинга, поэтому импортируем их
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const pahToUsers = path.join(__dirname, "../data/users.json");
usersId.get('/users/:id', (req, res) => {
fsPromises.readFile(pahToUsers, { encoding: 'utf8' })
  .then((data) => {
    const users = JSON.parse(data);;
    const state = users.find((user) => {
      const id = req.params.id
      return user["_id"] == id;
    })
    if(!state) {
      res.statusCode = 404;
      res.send(JSON.stringify({"message": "Нет пользователя с таким id" }))
      return
    }
    res.send(state)
    return
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = usersId;