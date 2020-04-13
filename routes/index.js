const router = require('express').Router();
const filmsRouter = require('./films');

router.use('/films', filmsRouter);

module.exports = router;