const express = require('express');
const router = express.Router();

const controller = require('../controllers/phim.controller');

router.get('/', controller.index);
router.post('/:id', controller.getMovieById);

module.exports = router;
