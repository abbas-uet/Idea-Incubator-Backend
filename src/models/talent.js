const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Talent extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Talent.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            name: DataTypes.STRING,
            session: DataTypes.STRING,
            email: DataTypes.STRING,
            department:DataTypes.STRING,
            rollNo:DataTypes.INTEGER,
            skills:DataTypes.STRING
        },
        {
            // options
            sequelize,
            modelName: 'Talent',
            tableName: 'talent',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    return Talent;
};