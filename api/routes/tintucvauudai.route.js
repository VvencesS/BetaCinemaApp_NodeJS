const express = require('express');
const router = express.Router();

const controller = require('../controllers/tintucvauudai.controller');

router.get('/', controller.index);
router.get('/offers', controller.getAllOffers);
router.get('/news', controller.getAllNews);
router.post('/:id', controller.getOffersAndNewsById);

module.exports = router;
