const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Industry extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Industry.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password:DataTypes.STRING
        },
        {
            // options
            sequelize,
            modelName: 'Industry',
            tableName: 'industry',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    return Industry;
};