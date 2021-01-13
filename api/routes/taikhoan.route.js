const express = require('express');
const router = express.Router();

const controller = require('../controllers/taikhoan.controller');

router.get('/', controller.index);
router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.put('/:id', controller.update);
// router.delete('/:id', controller.delete);

module.exports = router;