const crypto = require("crypto")

const users = []


function getAllUsers(req,res){
    res.send(users)
}

const getUserByID = (req,res)=>{
    const id = req.params.id

    const user = users.find(user => user.id === id)  

    res.send(user)
}

const createUser = (req,res)=>{
    const id = crypto.randomUUID()

    const user = {
        id:id,
        name:req.body.name,
        age:req.body.age
    }
    
    users.push(user)
    res.status(201).send(user)
}

const updateUser = (req,res)=>{
    const id = req.params.id

    const user = users.find(user => user.id === id)  

    user.name = req.body.name
    user.age = req.body.age

    res.send(user)
   
}

const deleteUser = (req,res)=>{
    const id = req.params.id

    const index = users.indexOf({
        id: id
    })
    users.splice(index,1)
    res.send(users)
}
module.exports = {getAllUsers, getUserByID,createUser,updateUser,deleteUser}
