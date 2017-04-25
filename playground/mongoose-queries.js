const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58fe698738a25089ab374ff211';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not found');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '58fd399b39e1be6c6271b359';
if (!ObjectID.isValid(id)) {
  return console.log('User ID not found');
}

User.findById(id).then((user) => {
  if(!user) {
     return console.log('User not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
