const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EmailsPromo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    EmailsPromo.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            emailid: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            promoid: {
                type:DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            // options
            sequelize,
            modelName: 'EmailsPromo',
            tableName: 'emailspromo',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    EmailsPromo.associate=(models)=>{
        EmailsPromo.belongsTo(models.User,{
            foreignKey:'emailid',
            targetKey:'email'
        });
        EmailsPromo.belongsTo(models.PromoCode,{
            foreignKey:'promoid',
        });
    }
    return EmailsPromo;
};