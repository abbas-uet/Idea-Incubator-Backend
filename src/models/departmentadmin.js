const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DepartmentAdmin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DepartmentAdmin.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            departmentId: {
                type:DataTypes.INTEGER,
                allowNull: false,
            },
            adminId: {
                type:DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            // options
            sequelize,
            modelName: 'DepartmentAdmin',
            tableName: 'departmentadmin',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    DepartmentAdmin.associate=(models)=>{
        DepartmentAdmin.belongsTo(models.Admin,{
            foreignKey:'adminId',
        });
        DepartmentAdmin.belongsTo(models.Department,{
            foreignKey:'departmentId',
        });

    }
    return DepartmentAdmin;
};