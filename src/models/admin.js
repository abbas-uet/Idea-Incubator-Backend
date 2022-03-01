const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Admin.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            fullname: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            // options
            sequelize,
            modelName: 'Admin',
            tableName: 'admin',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    Admin.associate=(models)=>{
        Admin.hasMany(models.DepartmentAdmin,{
            foreignKey:'adminId',
        })
    }
    return Admin;
};