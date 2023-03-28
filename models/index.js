// database models
const Product = require(`./Product`);
const Brand = require(`./Brands`);
const Category = require(`./Category`);
const Customer = require(`./Customer`);
const Order = require(`./Order`);
const ProductOrder = require(`./ProductOrder`);

// associations
Customer.hasMany(Order, {
    foreignKey: 'order_id'
});

Order.belongsTo(Customer,{
    foreignKey: 'customer_id'
});

Order.belongsToMany(Product,{
    through: ProductOrder,
    foreignKey: 'order_id'
});

Product.belongsToMany(Order, {
    through: ProductOrder,
    foreignKey: 'product_id'
});

Category.hasMany(Product,{
    foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Brand.hasMany(Product, {
    foreignKey: 'brand_id'
});

Product.belongsTo(Brand, {
    foreignKey: 'brand_id'
});

module.exports = {
    Product,
    Category,
    Customer,
    Brand,
    ProductOrder,
    Order
};