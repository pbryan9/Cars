const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/cars", {
  logging: true,
});

const Car = db.define("car", {
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
    indexes: [{ unique: true, fields: ["car"] }],
  },
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    indexes: [{ unique: true, fields: ["car"] }],
  },
  year: {
    type: Sequelize.INTEGER,
    alowNull: false,
    indexes: [{ unique: true, fields: ["car"] }],
  },
});

const Driver = db.define("driver", {
  name: {
    type: Sequelize.STRING,
    // primaryKey: true,
    // autoIncrement: true,
    allowNull: false,
    indexes: [{ unique: true, fields: ["driver"] }],
  },
  // lastName: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   // primaryKey: true,
  //   // autoIncrement: true,
  //   // validate: {
  //   //   notEmpty: true,
  //   // },
  //   indexes: [{ unique: true, fields: ["driver"] }],
  // },
});

const Team = db.define("team", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    // primaryKey: true,
    // autoIncrement: true,
    // validate: {
    //   notEmpty: true,
    // },
    indexes: [{ unique: true, fields: ["team"] }],
  },
});

Driver.hasMany(Car);
Car.belongsTo(Driver);

Team.hasMany(Driver);
Driver.belongsTo(Team);

Team.hasMany(Car);
//   foreignKey: "teamId",
// });
Car.belongsTo(Team);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  // const tigers = await Team.create({
  //   name: "Tigers",
  // });

  const driver1 = await Driver.create({
    name: "Patric",
    lastName: "Bryan",
    // teamId: tigers.id,
    indexes: [{ unique: true, fields: ["driver1"] }],
  });
  // const driver2 = await Driver.create({
  //   name: "B",
  //   lastName: "P",
  //   // teamId: tigers.id,
  // });
  // const driver3 = await Driver.create({
  //   name: "A",
  //   lastName: "L",
  //   // teamId: tigers.id,
  // });
  // const driver4 = await Driver.create({
  //   name: "J",
  //   lastName: "K",
  //   // teamId: tigers.id,
  // });

  const car1 = await Car.create({
    make: "Ford",
    model: "Mustang",
    year: 1968,

    // driverId: driver1.id,
  });

  // const car2 = await Car.create({
  //   make: "Ford",
  //   model: "Mustang",
  //   year: 1968,

  //   // driverId: driver2.id,
  // });

  // const car3 = await Car.create({
  //   make: "Ford",
  //   model: "Mustang",
  //   year: 1968,

  //   // driverId: driver3.id,
  // });

  // const car4 = await Car.create({
  //   make: "Ford",
  //   model: "Mustang",
  //   year: 1968,

  //   // driverId: driver4.id,
  // });

  // drivers.setTeam(tigers);
  // const cars = await Car.create({ model: "Mustang", make: "Ford", year: 1968 });

  // cars.setTeam(tigers);
  // cars.setDriver(drivers);

  await db.sync();
  console.log("Seeding successful");
};

syncAndSeed();
module.exports = db;
