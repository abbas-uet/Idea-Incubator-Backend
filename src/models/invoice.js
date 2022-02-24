const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Invoice extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Invoice.init(
        {
            invoiceid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            createdon:{
                type:DataTypes.DATE,
                allowNull:false
            },
            duedate: {
                type:DataTypes.DATE,
                allowNull:false
            },
            paymentMethod: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            ammount:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            status:{
                type:DataTypes.STRING,
                allowNull:false
            },
            userId:{
                type:DataTypes.INTEGER,
                allowNull:false
            }
        },
        {
            // options
            sequelize,
            modelName: 'Invoice',
            tableName: 'Invoice',
            createdAt: false,
            updatedAt: false,
            underscore: false,
        },
    );
    Invoice.associate=(models)=>{
        Invoice.belongsTo(models.User,{
            foreignKey:'userId',
        })
    }
    return Invoice;
};