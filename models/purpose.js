const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the model/schema
 class purpose extends Model {}
 
     
 purpose.init(
    {

       id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
       },


       reason: {
       type: DataTypes.STRING,
       allowNull: false,
       },

       reason_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },

   donations_id: {
       type: DataTypes.INTEGER,
       references: {
           model: 'donations',
           key: 'id'
       }
   }
},

   {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'purpose',
 }

  

           
);    

module.exports = purpose;