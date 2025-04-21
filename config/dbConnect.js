const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("salesdb", "root", "1234", {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
});


const dbConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySQL database connected successfully...")
    } catch (error) {
        console.log('Some error occured while connecting to database:\n', error)
    }
}

module.exports = {dbConnect, sequelize};