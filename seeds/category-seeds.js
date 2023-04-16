const { Category } = require(`../models`);

const categoryData = [
    {
        "category_name": "Sportsware"
    },
    {
        "category_name": "Boots"
    },
    {
        "category_name": "Formal"
    },
    {
        "category_name": "Casual"
    },
    {
        "category_name": "Sandals"
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;