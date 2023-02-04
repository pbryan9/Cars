const { db, Car, Driver, Team } = require('./model');

const syncAndSeed = async () => {
  await db.sync({ force: true });

  const team1 = await Team.create({
    name: 'BestTeam',
  });

  const driver1 = await Driver.create({
    name: 'Patric',
  });

  driver1.setTeam(team1);

  const driver2 = await Driver.create({
    name: 'Anastasia',
  });

  driver2.setTeam(team1);

  const car1 = await Car.create({
    make: 'Ford',
    model: 'Mustang',
  });

  const car2 = await Car.create({
    make: 'Shelby',
    model: 'Cobra',
  });

  await car1.setDriver(driver2);
  await car2.setDriver(driver1);
  await car1.setTeam(team1);
  await car2.setTeam(team1);

  await db.sync();

  console.log('Seeding successful');
};

(async () => {
  syncAndSeed();
})();
