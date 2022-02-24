const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Files extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Files.init(
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                allowNull:false,
                autoIncrement:true
            },
            src: DataTypes.TEXT,
            extensiontype:{type:DataTypes.STRING,allowNull:false},
            fileof_id:DataTypes.INTEGER,
            tableid: DataTypes.INTEGER,
        },
        {
            // options
            sequelize,
            modelName: 'Files',
            tableName: 'files',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );


    return Files;
};