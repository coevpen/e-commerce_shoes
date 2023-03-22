const seedCustomers = require(`./customer-seeds`);
const seedProducts = require(`./product-seeds`);
const seedBrands = require(`./brand-seeds`);
const seedCategories = require(`./category-seeds`);

const sequelize = require(`../config/connection`);

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n ---- DATABASE SYNCED ----');
    await seedCustomers();
    console.log('\n ---- CUSTOMERS SEEDED ----');
    await seedBrands();
    console.log('\n ---- BRANDS SEEDED ----');
    await seedCategories();
    console.log('\n ---- CATEGORIESSEEDED ----');
    await seedProducts();
    console.log('\n ---- PRODUCTS SEEDED ----');



    process.exit(0);
};

seedAll();