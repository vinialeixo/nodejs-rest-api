const client = require("../database/connection")
const crypto = require("crypto")
const users = []

async function findUserById(id){
    const {rows} = await client.query('Select * FROM users WHERE ID=$1', [id])
    return rows
}

async function findAllUsers(){
    const {rows} = await client.query('Select * FROM users', [])

    return rows
}

async function createUser(name,age){
    
    const id = crypto.randomUUID()

    const user = {
        id:id,
        name:name,
        age:age
    }

    const {rows} = await client.query('INSERT INTO users(id,name,age) values($1,$2,$3)', [id,name,age])

    return rows
}

function updateUser(id,name,age){
    const user = users.find(user => user.id === id)  

    user.name = name
    user.age = age

    return user
}

function deleteUser(id){
    const index = users.indexOf({
        id: id
    })
    users.splice(index,1)

    return users
}

module.exports = {findUserById,findAllUsers,createUser,updateUser,deleteUser}

