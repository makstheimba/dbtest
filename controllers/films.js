const Film = require('../models/film');
const InternalError = require('../helpers/errors/InternalError');

module.exports.getFilms = (req, res, next) => {
    Film.find({})
        .then(films => res.send({ data: films }))
        .catch(() => next(new InternalError()));
};

module.exports.createFilm = (req, res) => {
  const { title, genre } = req.body;

  Film.create({ title, genre })
    .then(film => res.send({ data: film }))
    .catch(() => next(new InternalError()));
};

module.exports.likeFilm = (req, res) => {
  const { filmId, userId} = req.body;
  console.log(filmId, userId);
  Film.findByIdAndUpdate(
    req.body.filmId,
    { $addToSet: { likes: req.body.userId }},
    { new: true }
  ).orFail(() => {console.log('in fail')}).then(film => {
    res.send({ data: film })
  })
  .catch(() => next(new InternalError()));
}