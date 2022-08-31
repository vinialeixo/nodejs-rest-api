const crypto = require("crypto")
const users = []

function findUserById(id){
    
    return users.find(user => user.id === id)
    
}

function findAllUsers(){
    return users
}

function createUser(name,age){

    const id = crypto.randomUUID()

    const user = {
        id:id,
        name:name,
        age:age
    }
    
    users.push(user)

    return user
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

