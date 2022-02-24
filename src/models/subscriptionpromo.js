const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SubscriptionPromo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SubscriptionPromo.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            subscriptionId: {
                type:DataTypes.INTEGER,
                allowNull: false,
            },
            promoId: {
                type:DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            // options
            sequelize,
            modelName: 'SubscriptionPromo',
            tableName: 'subscriptionpromo',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    SubscriptionPromo.associate=(models)=>{
        SubscriptionPromo.belongsTo(models.Subscription,{
            foreignKey:'subscriptionId',
        });
        SubscriptionPromo.belongsTo(models.PromoCode,{
            foreignKey:'promoId',
        });
    }
    return SubscriptionPromo;
};