const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Asset extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Asset.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            type: DataTypes.STRING,
            category: DataTypes.STRING,
            description:DataTypes.STRING,
            time_start:DataTypes.DATE,
            time_end:DataTypes.DATE,
            days:DataTypes.INTEGER,
        },
        {
            // options
            sequelize,
            modelName: 'Asset',
            tableName: 'asset',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );

    return Asset;
};