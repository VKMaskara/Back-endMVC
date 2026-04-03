const users = require("../data/users")
const findAll = () => {
    return users
}

const create = (newUser) => {
    users.push(newUser)
    return newUser
}

const findById = (id) => {
    // for (let i = 0; i < users.length; i++ ){
    //     if (users[i].id == id){
    //         return users[i]
    //     }
    // }

    // return null
    return users.find(user => user.id == id)
}

const update = (id, newUser) => {
    const user = users.find(user => user.id == id)

    if (!user) {
        return undefined
    }
    //    user = {
    //     id: users.id,
    //     name: newUser.name,
    //     age: newUser.age
    //    }
    if (newUser.name) {
        user.name = newUser.name
    }

    if (newUser.age) {
        user.age = newUser.age
    }
    return user
}

const remove = (id) => {
    const index = users.findIndex(user => user.id === (id))

    const user = users[index]

    if (!user) {
        return undefined
    }

    users.splice(index, 1)

    return user
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    remove
}