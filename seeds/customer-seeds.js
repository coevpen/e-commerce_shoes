const { Customer } = require(`../models`);

const customerData = [
    {
        first_name: 'Greg',
        last_name: 'Patterson',
        email: 'Gpatt@email.com',
        address: '1011 Fake Street',
        password: 'password123'
    },
    {
        first_name: 'Laura',
        last_name: 'Rigby',
        email: 'LRig@email.com',
        address: '2022 Fun Street',
        password: 'password122'
    },
    {
        first_name: 'Bobby',
        last_name: 'Newport',
        email: 'bobbynew@email.com',
        address: '5243 Eagleton Road',
        password: 'password000'
    }
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;