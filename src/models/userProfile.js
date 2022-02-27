const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserProfile extends Model {
        /*
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UserProfile.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            profile_image: DataTypes.STRING,

            headline: DataTypes.TEXT,

            location:DataTypes.STRING,
            project_name:DataTypes.STRING,

            tech_tools: DataTypes.STRING,
            description:DataTypes.TEXT,
            file_url:DataTypes.STRING,
            user_id:DataTypes.INTEGER
        },
        {
            // options
            sequelize,
            modelName: 'UserProfile',
            tableName: 'userProfile',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );

    UserProfile.associate=(models)=>{
        UserProfile.belongsTo(models.User,{
            foreignKey:'user_id',
            targetKey:'userid'
        });
    }
    return UserProfile;
};