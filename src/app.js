const express = require("express")
const userController = require ("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("R.O.M.A!!!!")
})

app.use(express.json())

app.post("/users", userController.creatUSer)

app.get("/users", userController.getAllUsers)

app.get("/users/:id", userController.getUserById)

module.exports = app