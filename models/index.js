// database models
const Product = require(`./Product`);
const Brand = require(`./Brand`);
const Category = require(`./Category`);
const Customer = require(`./Customer`);
const Order = require(`./Order`);
const ProductOrder = require(`./ProductOrder`);

// associations
Customer.hasMany(Order, {
    foreignKey: 'customer_id'
});

Order.belongsTo(Customer,{
    foreignKey: 'order_id'
});

Order.hasMany(Product,{
    through: ProductOrder,
    foreignKey: 'order_id'
});

Product.belongsToMany(Order, {
    through: ProductOrder,
    foreignKey: 'product_id'
});

Category

Brand
