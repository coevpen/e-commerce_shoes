const { Model, DataTypes } = require(`sequelize`);

const sequelize = require(`../config/connection.js`);

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate:{
                isDecimal: true
            }
        },
        brand_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'brand',
                key: 'id'
            }
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {   
            type: DataTypes.INTEGER,
            allowNull: true,
            Min: 0,
            Max: 5,
            validate: {
                isNumeric: true
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        stockQTY: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            Min: 0,
            validate: {
                isNumeric: true
            }
        },
        sexCategory:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;