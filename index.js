const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const displayRoutes = require('express-routemap');

const errorMiddleware = require('./middlewares/error');
const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use('/films', require('./routes/films'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Ссылка на сервер');
  console.log(BASE_PATH);

  displayRoutes(app);
});
