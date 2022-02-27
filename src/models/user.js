const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            userid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type:DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            joindate:{
                type:DataTypes.DATE,
                allowNull:false
            },
            email:{
                type:DataTypes.STRING,
                unique:true,
                allowNull:false
            },
            fullname:{
                type:DataTypes.STRING,
            }
        },
        {
            // options
            sequelize,
            modelName: 'User',
            tableName: 'user',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    User.associate=(models)=>{
        User.hasMany(models.EmailsPromo,{
            foreignKey:'emailid',
        });
        User.hasMany(models.Invoice,{
            foreignKey:'userId',
        });
        User.hasOne(models.UserProfile,{
            foreignKey:"user_id"
        })
    }
    return User;

};
