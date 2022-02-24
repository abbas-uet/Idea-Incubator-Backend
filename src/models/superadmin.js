const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SuperAdmin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SuperAdmin.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            fullname: DataTypes.STRING
        },
        {
            // options
            sequelize,
            modelName: 'SuperAdmin',
            tableName: 'superadmin',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    return SuperAdmin;
};