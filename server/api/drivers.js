const router = require('express').Router();
const { Driver } = require('../db/model');

router.get('/', async (req, res, next) => {
  try {
    const drivers = await Driver.findAll();
    res.status(200).json(drivers);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newMessage = await Driver.create(req.body);
    res.status(201).json(newMessage);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
