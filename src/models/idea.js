const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Idea extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Idea.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            field:DataTypes.STRING,
            projectname: DataTypes.STRING
        },
        {
            // options
            sequelize,
            modelName: 'Idea',
            tableName: 'Idea',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    Idea.associate=(models)=> {
        Idea.hasMany(models.User,{
            foreignKey:'ideaId'
        });
    }
    return Idea;
};