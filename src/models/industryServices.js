const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IndustryServices extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    IndustryServices.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            industry_id:DataTypes.INTEGER
        },
        {
            // options
            sequelize,
            modelName: 'IndustryServices',
            tableName: 'industryServices',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    IndustryServices.associate=(models)=> {
        IndustryServices.belongsTo(models.Industry, {
                foreignKey: 'industry_id',
                targetKey:'id'
            }
        );
    }
    return IndustryServices;
};