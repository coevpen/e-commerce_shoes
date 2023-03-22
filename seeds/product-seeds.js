const { Product } = require(`../models`);

const productData = [
    {
        "product_name": "Duffin",
        "price": 15.99,
        "brand_id": 1,
        "size": "5",
        "color": "Blue",
        "image": "insertImage.jpg",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 3,
        "sexCategory": "female"
    },
    {
        "product_name": "Zorro",
        "price": 34.99,
        "brand_id": 1,
        "size": "8",
        "color": "Red",
        "image": "insertImage.jpg",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 3,
        "sexCategory": "male"
    },
    {
        "product_name": "Lonlon",
        "price": 23.99,
        "brand_id": 1,
        "size": "9",
        "color": "Green",
        "image": "insertImage.jpg",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 3,
        "sexCategory": "female"
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;