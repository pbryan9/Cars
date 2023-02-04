const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const { db } = require('./db/model');
const apiRoutes = require('./api/routes');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal sever error');
});

const init = async () => {
  await db.sync();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};
init();

module.exports = app;
