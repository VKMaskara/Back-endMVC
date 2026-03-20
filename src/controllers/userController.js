const userModel = require("../models/userModel.js")

const getAllUsers = (req, res) => {
    const users = userModel.findAll()


    return res.send(users)
}

const creatUSer = (req, res) => {
    // console.log(req.body.nome)
    const {
        name,
        age,
    } = req.body

    const newUser = {
        id: Date.now(),
        name : name,
        age : age
    }

    // const name = req.body.name
    // const idade = req.body.age

    const createdUser = userModel.create(newUser)

    res.status(201).json(createdUser)

}


module.exports = {
    getAllUsers,
    creatUSer
}