const users = require('./users');
const donations = require('./donations');
const purpose = require('./purpose');


users.hasOne(donations, {
    foreignKey: 'users_id',
   });
  
  donations.belongsTo(users, {
    foreignKey: 'users_id',
  });

  donations.hasOne(purpose, {
    foreignKey: 'donations_id',
  });

  purpose.belongsTo(donations, {
    foreignKey: 'donations_id',
  }); 

 
  


module.exports = { users, donations, purpose };