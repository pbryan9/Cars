const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const PORT = 3000;
const { db } = require('./db/model');
const apiRoutes = require('./api/routes');

const PUBLIC_ROOT = path.join(__dirname, '..', 'public');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(PUBLIC_ROOT));

app.use('/api', apiRoutes);

app.get('/cars', (req, res) => {
  res.sendFile('index.html', {
    root: PUBLIC_ROOT,
  });
});

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
