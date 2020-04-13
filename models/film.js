const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
    // select: false
/*
user = {
  email: '1@yandex.ru',
  password: '12345',
  name: 'Vasia'
}
*/
  },
  genre: {
    type: String,
    enum: ['комедия', 'драма', 'боевик', 'триллер', 'документальный'],
    required: true
  },
  likes: {
    type: [String]
  }
});

module.exports = mongoose.model('film', filmSchema);
