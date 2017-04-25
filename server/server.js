var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
      res.send({todos});
    }, (error) => {
      res.status(400).send(error);
    });
});

//GET /todos/:id

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    res.status(404).send({});
    return console.log('Invalid ID');
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send({});
      return console.log('User not found');
    } else {
      res.status(200).send({todo});
      return console.log('User found');
    }
  }).catch((e) => {res.status(400).send({e})});
});

app.listen(port, () => {
  console.log(`Server is up and running on Port ${port}`);
});

module.exports = {app};
