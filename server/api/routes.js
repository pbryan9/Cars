const router = require('express').Router();
const cars = require('./cars');
const messages = require('./messages');
const drivers = require('./drivers');

router.use('/cars', cars);
router.use('/messages', messages);
router.use('/drivers', drivers);

module.exports = router;
