const express = require("express")
const UsersRouter = express.Router()
const UserController= require("../controllers/userController")

UsersRouter.get("/",UserController.getAllUsers)
UsersRouter.get("/:id", UserController.getUserById)
UsersRouter.post("/", UserController.createNewUser)
UsersRouter.delete("/",UserController.deleteUser)
UsersRouter.put("/",UserController.updateUser)

module.exports = UsersRouter