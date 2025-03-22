const express = require("express")
const TodosRouter = express.Router()
const TodosController= require("../controllers/todoController")

TodosRouter.get("/",TodosController.getAllTodos)
TodosRouter.get("/:id", TodosController.getTodoById)
TodosRouter.post("/", TodosController.createNewTodo)
TodosRouter.delete("/",TodosController.deleteTodo)
TodosRouter.put("/",TodosController.updateTodo)
TodosRouter.put("/complete/:id",TodosController.updateTodoComplete)

module.exports = TodosRouter