const { users } = require('../models');

const usersData = [

     {
         id: '2343',
         organs_donated: 'brain',
         biofluids_donated: 'CSF',
         reason: 'Research',
         username: '2343Donor',
         email: '2343@gmail.com',
         password: '2343Pass'
     },

     {
        id: '9456',
        organs_donated: 'Heart',
        biofluids_donated: 'blood',
        reason: 'Tissue Donation',
        username: '9456Donor',
        email: '9456@gmail.com',
        password: '9456Pass'
    },

    {
        id: '3278',
        organs_donated: 'kidney',
        biofluids_donated: 'None',
        reason: 'Directed Donation',
        username: '3278Donor',
        email: '3278@gmail.com',
        password: '3278Pass'
    },

    {
        id: '5486',
        organs_donated: 'liver',
        biofluids_donated: 'blood',
        reason: 'Non Directed Donation',
        username: '5486Donor',
        email: '5486@gmail.com',
        password: '5486Pass'
    },

    {
        id: '2156',
        organs_donated: 'lungs',
        biofluids_donated: 'plasma',
        reason: 'Paired Donation',
        username: '2156Donor',
        email: '2156@gmail.com',
        password: '2156Pass'
    },

    {
        id: '0932',
        organs_donated: 'Intestines',
        biofluids_donated: 'None',
        reason: 'Pediatric Donation',
        username: '0932Donor',
        email: '0932@gmail.com',
        password: '0932Pass'
    },

     
];





const seedUsers = () => users.bulkCreate(usersData);
module.exports = seedUsers;
