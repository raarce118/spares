const { purpose } = require('../models');

const purposeData = [

  {
    id: '1',
    reason: 'Research',
  
  },

  { 
    id: '2',
    reason: 'Non-Directed Donation',
   
  },

  {
    id: '3',
    reason: 'Pediatric Donation',
  
  },

  {
    id: '4',
    reason: 'Paired Donation',
   
  },

  {
    id: '5',
    reason: 'Directed Donation',
  
  },

  {
    id: '6',
    reason: 'Tissue Donation',
 
  },
];

const seedPurpose = () => purpose.bulkCreate(purposeData);
module.exports = seedPurpose;

