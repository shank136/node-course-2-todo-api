var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  email: {
    type: String,
    default: false,
    required: true,
    minlength: 1
  }
});

module.exports = {User};
