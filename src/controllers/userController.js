const userModel = require("../models/userModel.js")

const getAllUsers = (req, res) => {
    const users = userModel.findAll()


   return  res.send(users)
}

module.exports = {
    getAllUsers
}