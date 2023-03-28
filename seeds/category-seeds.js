const { Category } = require(`../models`);

const categoryData = [
    {
        "category_name": "Sports"
    },
    {
        "category_name": "Boots"
    },
    {
        "category_name": "Formal"
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;