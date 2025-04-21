const express = require('express');
const {dbConnect, sequelize} = require('./config/dbConnect.js');
const User = require("./models/user.model.js")
const userRouter = require('./routes/user.router.js')

const app = express();
dbConnect();

User.sync();

app.use(express.json())

app.use("/api/user", userRouter)


app.listen('8000', () => {
    console.log(`Server started at port: ${8000}`)
})