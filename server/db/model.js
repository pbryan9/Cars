const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/cars', {
  logging: true,
});

const Driver = db.define('driver', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Car = db.define('car', {
  make: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Team = db.define('team', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Driver.hasMany(Car);
Car.belongsTo(Driver);

Team.hasMany(Driver);
Driver.belongsTo(Team);

Team.hasMany(Car);
Car.belongsTo(Team);

module.exports = { db, Car, Driver, Team };
