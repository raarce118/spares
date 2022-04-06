const seedUsers = require('./users-seeds');
const seedPurpose = require('./purpose-seeds');
const seedOrgans = require('./organ-seeds');
const seedBiofluids = require('./biofluids-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedPurpose();
    console.log('\n----- PURPOSE SEEDED -----\n');
  
    await seedOrgans();
    console.log('\n----- ORGANS SEEDED -----\n');
  
    await seedBiofluids();
    console.log('\n----- BIOFLUIDS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();