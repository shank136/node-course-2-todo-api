//const MongoClient =  require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID("58fcf261af6afbf4fac3bdce")
    // }, {
    //   $set: {completed: true}
    // }, {
    //   returnNewDocument: true
    // }).then((docs) => {
    //   console.log('Update complete: ', docs);
    // }, (error) => {
    //   console.log('Could not perform update', error);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("58fa88adcc06ad2b1283f65f")
    }, {
      $set: {name: "Vishal Kumar Patil"},
      $inc: {age: -1}
    }, {
      returnNewDocument: false
    }).then((docs) => {
      console.log('Update complete: ', docs);
    }, (error) => {
      console.log('Error occured: ', error);
    });

    //db.close();
});
