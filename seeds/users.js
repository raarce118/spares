const { users } = require('../models');

const usersData = [

     {
         id: '2343',
         organs_name: 'brain',
         biofluids_name: 'CSF',
         purpose_name: 'Research',
         username: '2343Donor',
         email: '2343@gmail.com',
         password: '2343Pass'
     },

     {
        id: '9456',
        organs_name: 'Heart',
        biofluids_name: 'blood',
        purpose_name: 'Tissue Donation',
        username: '9456Donor',
        email: '9456@gmail.com',
        password: '9456Pass'
    },

    {
        id: '3278',
        organs_name: 'kidney',
        biofluids_name: 'None',
        purpose_name: 'Directed Donation',
        username: '3278Donor',
        email: '3278@gmail.com',
        password: '3278Pass'
    },

    {
        id: '5486',
        organs_name: 'liver',
        biofluids_name: 'blood',
        purpose_name: 'Non Directed Donation',
        username: '5486Donor',
        email: '5486@gmail.com',
        password: '5486Pass'
    },

    {
        id: '2156',
        organs_name: 'lungs',
        biofluids_name: 'plasma',
        purpose_name: 'Paired Donation',
        username: '2156Donor',
        email: '2156@gmail.com',
        password: '2156Pass'
    },

    {
        id: '0932',
        organs_name: 'Intestines',
        biofluids_name: 'None',
        purpose_name: 'Pediatric Donation',
        username: '0932Donor',
        email: '0932@gmail.com',
        password: '0932Pass'
    },

     
];





const seedUsers = () => users.bulkCreate(usersData);
module.exports = seedUsers;
