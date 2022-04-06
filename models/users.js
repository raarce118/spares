const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt);
const sequelize = require('../config/connection');

// create the model/schema
 class users extends Model {
   //check password
   checkPassword(loginPW) {
       return bcrypt.compareSync(loginPW, this.password);
   }
 }
     
  users.init(
     {

         id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true
         },
         organs_donated: {
             type: DataTypes.STRING,
             allowNull: false
         },

         biofluids_donated: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false
        },
         username: {
            type: DataTypes.STRING,
            allowNull: false                 
         },
         email: {
             type: DataTypes.STRING,
             allowNull: false,
             unique: true,
             validate: {
              isEmail: true
             }
         },
          password: {
             type: DataTypes.STRING,
             allowNull: false,
             validate: {
             len: [4]
             }
         }
     },
     {
         hooks: {
             async beforeCreate(newUserData) {
             newUserData.password = await bcrypt.hash(newUserData.password, 10);
             return newUserData;
             },
    
             async beforeUpdate(updatedUserData) {
             updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
             return updatedUserData;
             }
         },
         sequelize,
         timestamps: false,
         freezeTableName: true,
         underscored: true,
         modelName: 'users'
      }    
            
 );  

module.exports = users;

