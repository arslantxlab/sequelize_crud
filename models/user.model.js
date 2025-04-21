const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/dbConnect.js')



const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: false
}
);


module.exports = User;