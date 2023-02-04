const router = require('express').Router();
const { Car, Driver, Team } = require('../db/model');

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.findAll({
      include: [Driver, Team],
    });
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.get('/:carId', async (req, res, next) => {
  try {
    const { carId } = req.params;
    const car = await Car.findByPk(carId, {
      include: [Driver, Team],
    });
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
