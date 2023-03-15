const seedCustomers = require(`./customer-seeds`);

const sequelize = require(`../config/connection`);

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n ---- DATABASE SYNCED ----');
    await seedCustomers();
    console.log('\n ---- CUSTOMERS SEEDED ----');

    process.exit(0);
};

seedAll();