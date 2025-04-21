const { json } = require('sequelize');
const User = require('../models/user.model.js')

const userGetController = async (req, res) => {
    const data = await User.findAll();
    res.status(200).json(data)
}

const userPostController = async (req, res) => {
    //extracts values form requestbody
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({ firstName, lastName, email });
    
    res.status(201).json(newUser)
}

const userPatchController = async (req, res) => {
    //to dynamically add only those fields which user want to update
    const updateFields = {};  
    const id = req.params.id;
    const { firstName, lastName, email } = req.body;

    //Check if any field is empty and if it is dont add it into updateFields object
    if (firstName) updateFields.firstName = firstName;
    if (lastName) updateFields.lastName = lastName;
    if (email) updateFields.email = email;

    const user = await User.findByPk(id);

    if (user === null) {
        return res.status(400).json({
            success: false,
            message: `User with ID: ${id} not found!`
        });
    }

    await user.update(updateFields);

    res.status(200).json({
        success: true,
        message: user
    })
}


const userDeleteController = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (user === null) {
        return res.status(400).json({
            success: false,
            message: `User with ID: ${id} not found!`
        });
    }
    await user.destroy();

    res.status(201).json({
        success: false,
        message: 'Record Deleted'
    })
}


const userByIdGetController = async (req, res) => {
    const id = req.params.id;

    const user = await User.findByPk(id);
    if (user === null) {
        return res.status(400).json({
            success: false,
            message: `User with ID: ${id} not found!`
        });
    }

    res.status(200).json({
        success: true,
        data: user
    })
}


module.exports = {
    userGetController,
    userPostController,
    userPatchController,
    userDeleteController,
    userByIdGetController
}