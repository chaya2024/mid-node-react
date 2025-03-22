const express = require("express")
const PostsRouter = express.Router()
const PostController= require("../controllers/postController")

PostsRouter.get("/",PostController.getAllPosts)
PostsRouter.get("/:id", PostController.getPostById)
PostsRouter.post("/", PostController.createNewPost)
PostsRouter.delete("/",PostController.deletePost)
PostsRouter.put("/",PostController.updatePost)

module.exports = PostsRouter