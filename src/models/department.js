const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Department extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Department.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            departmentname: DataTypes.STRING,
            admins: DataTypes.INTEGER
        },
        {
            // options
            sequelize,
            modelName: 'Department',
            tableName: 'department',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    Department.associate=(models)=>{
        Department.hasMany(models.DepartmentAdmin,{
            foreignKey:'departmentId',
        })
    }
    return Department;
};