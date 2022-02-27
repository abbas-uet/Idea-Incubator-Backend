const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MentorProfile extends Model {
        /*
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    MentorProfile.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            profile_image: DataTypes.STRING,

            headline: DataTypes.TEXT,

            location:DataTypes.STRING,

            description:DataTypes.TEXT,
            mentor_id:DataTypes.INTEGER

        },
        {
            // options
            sequelize,
            modelName: 'MentorProfile',
            tableName: 'mentorProfile',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );

    MentorProfile.associate=(models)=>{
        MentorProfile.belongsTo(models.Mentor,{
            foreignKey:'mentor_id',
            targetKey:'id'
        });
    }
    return MentorProfile;
};