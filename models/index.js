const biofluids = require('./biofluids');
const users = require('./users');
const organs = require('./organs');
const purpose = require('./purpose');


users.hasMany(organs, {
    foreignKey: 'users_id',
   });
  
  organs.belongsTo(users, {
    foreignKey: 'users_id',
  });
  
   users.hasMany(biofluids, {
  foreignKey: 'users_id',
});

   biofluids.belongsTo(users, {
  foreignKey: 'users_id',
});

   organs.hasOne(purpose, {
  foreignKey: 'organs_purpose',
});

purpose.belongsTo(organs, {
  foreignKey: 'organs_purpose',
});

biofluids.hasOne(purpose, {
  foreignKey: 'biofluids_purpose',
});

purpose.belongsTo(biofluids, {
  foreignKey: 'biofluids_purpose',
});

module.exports = { users, organs, biofluids, purpose };