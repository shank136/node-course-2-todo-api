var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://nodejsmongodb:Vishal27@ds119151.mlab.com:19151/udemynodejsmongodb'
}
mongoose.connect(process.env.PORT ? db.mlab : db.localhost);
module.exports = {mongoose};
