const express = require("express")
const userControler = require("./controllers/userController.js")

const app = express()

app.get("/", (request, response) => {
    response.send("R.O.M.A!!!!")
})

app.get("/users", userControler.getAllUsers)
module.exports = app