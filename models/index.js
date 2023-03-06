// database models
const Product = require(`./Product`);
const Brand = require(`./Brand`);
const Category = require(`./Category`);
const Customer = require(`./Customer`);
const Order = require(`./Order`);

// associations
Customer.hasMany(Order, {
    foreignKey: 'customer_id'
});
