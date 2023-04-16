const { Product } = require(`../models`);

const productData = [
    {
        "product_name": "Crocs Classic Sandals Black",
        "price": 34.99,
        "brand_id": 3,
        "color": "Black",
        "image": "2.webp",
        "rating": 0,
        "category_id": 4,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Converse Madison Mid-Top Sneakers Black",
        "price": 65.00,
        "brand_id": 4,
        "color": "Black",
        "image": "3.webp",
        "rating": 0,
        "category_id": 3,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Madden Girl Dixcy Dress Sandals Beige",
        "price": 59.99,
        "brand_id": 5,
        "color": "Beige",
        "image": "4.webp",
        "rating": 0,
        "category_id": 2,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Nike Air Max Excee Sneakers Pink",
        "price": 90.00,
        "brand_id": 2,
        "color": "Pink",
        "image": "5.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "DeWALT Lewiston Steel Toe Work Boots",
        "price": 99.99,
        "brand_id": 6,
        "color": "Beige",
        "image": "6.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Nike Victori One Print Sport Slides Black",
        "price": 35.00,
        "brand_id": 2,
        "color": "Black",
        "image": "7.webp",
        "rating": 0,
        "category_id": 4,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Nike Air Max Systm Sneakers Green",
        "price": 100.00,
        "brand_id": 2,
        "color": "Green",
        "image": "8.webp",
        "rating": 0,
        "category_id": 3,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Madden Alk Dress Shoes Brown",
        "price": 59.99,
        "brand_id": 5,
        "color": "Brown",
        "image": "10.webp",
        "rating": 0,
        "category_id": 2,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "New Balance MT481 Weatherized Trail Running Shoes Black",
        "price": 79.99,
        "brand_id": 7,
        "color": "Black",
        "image": "9.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Dr. Martens Combs Leather Combat Boots Black",
        "price": 119.99,
        "brand_id": 8,
        "color": "Black",
        "image": "11.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Y-Not Flossy Flip-Flops White",
        "price": 39.99,
        "brand_id": 8,
        "color": "White",
        "image": "12.webp",
        "rating": 0,
        "category_id": 4,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Crocs Brooklyn Low Wedge Sandals Beige",
        "price": 54.99,
        "brand_id": 3,
        "color": "Beige",
        "image": "13.webp",
        "rating": 0,
        "category_id": 4,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Vans Asher Slip-On Skate Shoes Red",
        "price": 59.99,
        "brand_id": 11,
        "color": "Red",
        "image": "14.webp",
        "rating": 0,
        "category_id": 3,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Converse Chuck Taylor All Star Shoreline Sneakers Black",
        "price": 60.00,
        "brand_id": 4,
        "color": "Black",
        "image": "15.webp",
        "rating": 0,
        "category_id": 3,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "American Glamour BadgleyM Xandra Special Occasion Shoes Gold",
        "price": 49.99,
        "brand_id": 10,
        "color": "Gold",
        "image": "16.webp",
        "rating": 0,
        "category_id": 2,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Y-Not Ariel Pumps Black",
        "price": 49.99,
        "brand_id": 9,
        "color": "Gold",
        "image": "17.webp",
        "rating": 0,
        "category_id": 2,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Nike Air Max Systm Sneakers Pink",
        "price": 100.00,
        "brand_id": 2,
        "color": "Pink",
        "image": "18.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "New Balance WA411 Walking Shoes White",
        "price": 69.99,
        "brand_id": 7,
        "color": "White",
        "image": "19.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Y-Not Deluxe Heeled Booties",
        "price": 49.99,
        "brand_id": 9,
        "color": "Brown",
        "image": "20.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "Makalu Rochelle Winter Boots",
        "price": 49.99,
        "brand_id": 12,
        "color": "Brown",
        "image": "21.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "female"
    },
    {
        "product_name": "New Balance Nitrel V5 Trail Running Shoes Black",
        "price": 74.99,
        "brand_id": 7,
        "color": "Black",
        "image": "22.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Nike Air Max Alpha Trainer 5 Training Shoes Blue",
        "price": 90.00,
        "brand_id": 2,
        "color": "Blue",
        "image": "23.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Skechers Bosnia 64152 Flip-Flops Brown",
        "price": 49.99,
        "brand_id": 13,
        "color": "Brown",
        "image": "24.webp",
        "rating": 0,
        "category_id": 4,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Dr. Martens Soloman Outdoor Sandals",
        "price": 109.99,
        "brand_id": 8,
        "color": "Black",
        "image": "25.webp",
        "rating": 0,
        "category_id": 4,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Nike Court Vision Low Next Nature Sustainable Sneakers Grey",
        "price": 75.00,
        "brand_id": 2,
        "color": "Grey",
        "image": "26.webp",
        "rating": 0,
        "category_id": 3,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Converse Chuck Taylor All Star Street Mid Lugged Sneakers",
        "price": 70.00,
        "brand_id": 4,
        "color": "Black",
        "image": "27.webp",
        "rating": 0,
        "category_id": 3,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Madden Dawnn Loafers Black",
        "price": 59.99,
        "brand_id": 5,
        "color": "Black",
        "image": "28.webp",
        "rating": 0,
        "category_id": 2,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "Madden Alk Dress Shoes Black",
        "price": 59.99,
        "brand_id": 5,
        "color": "Black",
        "image": "29.webp",
        "rating": 0,
        "category_id": 2,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "DeWALT Hadley Mid Steel Toe Work Boots Brown",
        "price": 119.99,
        "brand_id": 6,
        "color": "Brown",
        "image": "30.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "male"
    },
    {
        "product_name": "DeWALT Bristow 6 Inch Comp Toe Waterproof Work Boots",
        "price": 139.99,
        "brand_id": 6,
        "color": "Brown",
        "image": "31.webp",
        "rating": 0,
        "category_id": 1,
        "stockQTY": 10,
        "sexCategory": "male"
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;