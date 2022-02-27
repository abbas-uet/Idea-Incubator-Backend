const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IndustryProfile extends Model {
        /*
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    IndustryProfile.init(
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
            website:DataTypes.STRING,
            industry_id:DataTypes.INTEGER

        },
        {
            // options
            sequelize,
            modelName: 'IndustryProfile',
            tableName: 'industryProfile',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );

    IndustryProfile.associate=(models)=>{
        IndustryProfile.belongsTo(models.Industry,{
            foreignKey:'industry_id',
            targetKey:'id'
        });
    }
    return IndustryProfile;
};