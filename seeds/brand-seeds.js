const { Brand } = require(`../models`);

const brandData = [
    {
        "brand_name": "Rebok"
    },
    {
        "brand_name": "Chanel"
    },
    {
        "brand_name": "Nike"
    }
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;