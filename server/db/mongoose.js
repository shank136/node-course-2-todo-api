var mongoose = require('mongoose');
var MONGODB_URI = 'mongodb://nodejsmongodb:Vishal27@ds119151.mlab.com:19151/udemynodejsmongodb';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
