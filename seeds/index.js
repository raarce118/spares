const seedUsers = require('./users-seeds');
const seedPurpose = require('./purpose-seeds');
const seedDonations = require('./donations-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedPurpose();
    console.log('\n----- PURPOSE SEEDED -----\n');
  
    await seedDonations();
    console.log('\n----- DONATIONS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();