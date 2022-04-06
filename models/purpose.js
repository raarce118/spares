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


       purpose_name: {
       type: DataTypes.STRING,
       allowNull: false,
       },

   organs_id: {
       type: DataTypes.INTEGER,
       references: {
           model: 'organs',
           key: 'id'
       }
   },

   biofluids_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'biofluids',
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