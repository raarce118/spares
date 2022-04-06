const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the model/schema
class donations extends Model {}
      
donations.init(
    {

       id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
       },


       organs_donated: {
       type: DataTypes.STRING,
       allowNull: false,
       },

       biofluids_donated: {
        type: DataTypes.STRING,
        allowNull: false,
        },

        reason_donated: {
           type: DataTypes.STRING,
           allowNull: false,
        },
       
       users_id: {
        type: DataTypes.INTEGER,
        references: {
           models: 'users',
           key: 'id'
        }

       } 
    },
   {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'donations',
 }

  

           
);   
  
              
 
 module.exports = donations;