const router = require('express').Router();
const { Driver, Message } = require('../db/model');

router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.findAll({
      include: Driver,
    });
    res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const messageId = req.params.id;
    const message = await Message.findByPk(messageId, {
      include: Driver,
    });
    res.status(200).json(message);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const message = await Message.findByPk(req.params.id);
    await message.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
