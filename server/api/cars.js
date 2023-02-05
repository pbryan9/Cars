const router = require("express").Router();
const { Car, Driver, Team } = require("../db/model");

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.findAll({
      include: [Driver, Team],
    });
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:carId", async (req, res, next) => {
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

router.put("/:carId", async (req, res, next) => {
  try {
    const { carId } = req.params;
    const cars = await Car.findByPk(carId);
    res.send(await cars.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const car = await Car.create(req.body);
    res.sendStatus(201).json(car);
  } catch (err) {
    next(err);
  }
});

router.delete("/:carId", async (req, res, next) => {
  try {
    const { carId } = req.params;
    const car = await Car.findByPk(carId);
    await car.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
