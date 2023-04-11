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
    },
    {
        "brand_name": "Crocs"
    },
    {
        "brand_name": "Converse"
    },
    {
        "brand_name": "Madden"
    },
    {
        "brand_name": "DeWALT"
    },
    {
        "brand_name": "New Balance"
    },
    {
        "brand_name": "Dr.Martens"
    },
    {
        "brand_name": "Y-not"
    },
    {
        "brand_name": "Badgley Mischka"
    },
    {
        "brand_name": "Vans"
    },
    {
        "brand_name": "Makalu"
    },
    {
        "brand_name": "Skechers"
    }
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;