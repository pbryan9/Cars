const router = require('express').Router();
const cars = require('./cars');
const messages = require('./messages');

router.use('/cars', cars);
router.use('/messages', messages);

module.exports = router;
