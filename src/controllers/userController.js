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

const getUserById = (req, res) => {
    
    const id = req.params.id
    const user = userModel.findById(id)

    if (!user) return res.status(404).json({message: "Usuário não emcontrado"})

    return res.json(user)
}

module.exports = {
    getAllUsers,
    creatUSer,
    getUserById
}