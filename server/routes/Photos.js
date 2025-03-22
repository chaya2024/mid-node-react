const express = require("express")
const PhotosRouter = express.Router()
const PhotoController= require("../controllers/photoController")

PhotosRouter.get("/",PhotoController.getAllPhotos)
PhotosRouter.get("/:id", PhotoController.getPhotoById)
PhotosRouter.post("/", PhotoController.createNewPhoto)
PhotosRouter.delete("/",PhotoController.deletePhoto)
PhotosRouter.put("/",PhotoController.updatePhoto)

module.exports = PhotosRouter