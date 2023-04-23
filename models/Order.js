const { Model, DataTypes } = require(`sequelize`);

const sequelize = require(`../config/connection.js`);

class Order extends Model {}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        }, 
        total: {
            type: DataTypes.DECIMAL,
            validate:{
                isDecimal: true
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order',
    }
);

module.exports = Order;