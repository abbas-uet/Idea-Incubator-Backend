const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Subscription extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Subscription.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            planname: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type:DataTypes.ENUM('Basic','Standard','Pro','Plus'),
                allowNull: false,
            },
            billingperiod: {
                type:DataTypes.ENUM('Monthly','6 Months','Yearly'),
                allowNull: false,
            },
            ammount:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            unit:{
                type:DataTypes.INTEGER,
                allowNull:false
            }
        },
        {
            // options
            sequelize,
            modelName: 'Subscription',
            tableName: 'subscription',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    Subscription.associate=(models)=>{
        Subscription.belongsTo(models.CurrencyUnit,{
            foreignKey:'unit',
        });
        Subscription.hasMany(models.SubscriptionPromo,{
            onDelete:'cascade',
            foreignKey:'subscriptionId'
        })
    }

    return Subscription;
};