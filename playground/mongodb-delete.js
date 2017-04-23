//const MongoClient =  require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Vishal'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({'text' : 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({"_id":ObjectID("58fa8874a443b52af51fb26b")}).then(result => {
      console.log(result);
    });

    //db.close();
});
