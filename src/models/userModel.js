const users = require("../data/users")
const findAll = () => {
    return users
}

const create = (newUser) => {
    users.push(newUser)
    return newUser
}

module.exports = {
   findAll,
   create
}