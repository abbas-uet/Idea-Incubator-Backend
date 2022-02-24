const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Mentor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Mentor.init(
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
            modelName: 'Mentor',
            tableName: 'mentor',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    return Mentor;
};