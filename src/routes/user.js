const {Router} = require("express")

const userRoutes = Router()


// const {getAllUsers,getUserByID} = require("../controllers/user-Controler")
const userControler = require("../controllers/user-Controler")



userRoutes.get("/user", userControler.getAllUsers)

userRoutes.get("/user/:id", userControler.getUserByID)

userRoutes.post("/user", userControler.createUser )

userRoutes.put("/user/:id", userControler.updateUser)

userRoutes.delete("/user/:id", userControler.deleteUser)

module.exports = userRoutes