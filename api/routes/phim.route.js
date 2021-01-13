const express = require('express');
const router = express.Router();

const controller = require('../controllers/phim.controller');

router.get('/', controller.index);
router.get('/nowshowing', controller.getAllNowShowingMovie);
router.get('/comingsoon', controller.getAllComingSoonMovie);
router.get('/sneakshow', controller.getAllSneakShowMovie);
router.post('/:id', controller.getMovieById);


module.exports = router;
