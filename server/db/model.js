const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/cars', {
  logging: false,
});

const Message = db.define('message', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
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
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
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

Message.belongsTo(Driver);
Driver.hasMany(Message);

module.exports = { db, Car, Driver, Team, Message };
