const router = require('express').Router();
const { getFilms, createFilm, likeFilm } = require('../controllers/films');

router.get('/', getFilms);

router.post('/', createFilm);
router.patch('/', likeFilm);

module.exports = router;
