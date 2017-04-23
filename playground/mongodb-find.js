//const MongoClient =  require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({_id: new ObjectID('58fcf261af6afbf4fac3bdce')}).toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //   console.log('Unable to fetch Todos', error);
    // });

    // db.collection('Todos').find({}).count().then((count)=>{
    //   console.log(`Todos count: ${count}`);
    // }, (error) => {
    //   console.log('Unable to fetch Todos', error);
    // });

      db.collection('Users').find({name: 'Vishal'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
      console.log('The number of documents for the given query: ', docs.length);
    }, (error) => {
      console.log('Unable to fetch Users', error);
    });

    //db.close();
});
