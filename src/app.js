const express = require("express")
const app = express()
const userRoutes = require("./Routes/userRoutes")
app.get("/", (request, response) => {
    response.send("R.O.M.A!!!!")
})

app.use(express.json())


module.exports = app