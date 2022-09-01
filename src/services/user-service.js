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

async function updateUser(id,name,age){

    const {rows} = await client.query('UPDATE users SET age=$2,name=$3 WHERE ID=$1', [id,age,name])

    return rows
}

async function deleteUser(id){
    const {rows} = await client.query('DELETE FROM users WHERE ID=$1 ', [id])
    return rows
}

module.exports = {findUserById,findAllUsers,createUser,updateUser,deleteUser}

