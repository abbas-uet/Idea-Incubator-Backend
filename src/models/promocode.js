const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PromoCode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PromoCode.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            discount: {
                type:DataTypes.INTEGER,
                allowNull: false,
            },
            unit:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            expirydate:{
                type:DataTypes.DATE,
                allowNull:false
            }
        },
        {
            // options
            sequelize,
            modelName: 'PromoCode',
            tableName: 'promoCode',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    PromoCode.associate=(models)=>{
        PromoCode.belongsTo(models.CurrencyUnit,{
            foreignKey:'unit',
        });
        PromoCode.hasMany(models.EmailsPromo,{
            onDelete:'cascade',
            foreignKey:'promoid'
        });
        PromoCode.hasMany(models.SubscriptionPromo,{
            onDelete:'cascade',
            foreignKey:'promoId'
        });
    }
    return PromoCode;
};