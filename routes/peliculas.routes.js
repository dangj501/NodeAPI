const router = require('express').Router();
const peliculas = require('../controllers/peliculas.controller')

router.get('/', peliculas.getAll);

router.get('/:id', peliculas.get);

router.post('/', peliculas.create);

router.put('/:id', peliculas.update);

router.delete('/:id', peliculas.delete);

module.exports = router