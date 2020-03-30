const Film = require('../models/film');

module.exports.getFilms = (req, res) => {
    Film.find({})
        .then(films => res.send({ data: films }))
        .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createFilm = (req, res) => {
  const { title, genre } = req.body;

  Film.create({ title, genre })
    .then(film => res.send({ data: film }))
    .catch((err) => res.status(500).send({ err }));
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
  }).catch((err) => res.status(500).send({ err}))
}