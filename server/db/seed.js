const { db, Car, Driver, Team, Message } = require('./model');

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
    year: 1968,
    image: '/img/car1.jpg',
  });

  const car2 = await Car.create({
    make: 'Shelby',
    model: 'Cobra',
    year: 1988,
    image: '/img/car2.jpg',
  });

  const message1 = await Message.create({
    title: 'nice car',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rem laborum quas officiis deserunt! Velit vel sequi expedita, esse, voluptatem nisi nemo libero ipsam nesciunt praesentium perspiciatis dolorem nihil itaque perferendis est laudantium. Impedit laboriosam molestiae provident a voluptates neque!',
  });
  const message2 = await Message.create({
    title: 'hey thanks!!',
    content:
      'Lorem ipsum, dolor sit amet consectetur, esse, voluptatem nisi nemo libero ipsam nesciunt praesentium perspiciatis dolorem nihil itaque perferendis est laudantium. Impedit laboriosam molestiae provident a voluptates neque!',
  });

  await message1.setDriver(driver1);
  await message2.setDriver(driver2);

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
