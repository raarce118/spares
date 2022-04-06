const { donations } = require('../models');

const donationsData = [

  {
    id: '1',
    organs_donated: 'Heart', 
    biofluids_donated: 'plasma',
    reason_donated: 'Research'
  
  },

  { 
    id: '2',
    organs_donated: 'Brain',
    biofluids_donated: 'blood',
    reason_donated: 'Non-Directed Donation'
   
  },

  {
    id: '3',
    organs_donated: 'Kidney',
    biofluids_donated: 'platelets',
    reason_donated: 'Pediatric Donation'
  
  },

  {
    id: '4',
    organs_donated: 'Liver',
    biofluids_donated: 'CSF',
    reason_donated: 'Paired Donation'
   
  },

  {
    id: '5',
    organs_donated: 'Spleen',
    biofluids_donated: 'None',
    reason_donated: 'Directed Donation'
  
  },

  {
    id: '6',
    organs_donated: 'Intestines',
    biofluids_donated: 'plasma',
    reason_donated: 'Tissue Donation'
 
  },

  {
    id: '7',
    organs_donated: 'Lungs',
    biofluids_donated: 'blood',
    reason_donated: 'Research'
 
  },
];

const seedDonations = () => donations.bulkCreate(donationsData);
module.exports = seedDonations;