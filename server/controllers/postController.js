const Post = require("../models/Post")
const createNewPost = async (req, res) => {
    const { title, body } = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }

    const post = await Post.create({ title, body })
    if (post) {
        return res.status(201).json({ message: 'New post created' })
    }
    else {
        return res.status(400).json({ message: 'Invalid post' })
    }
}

const getAllPosts = async (req, res) => {
    const posts = await Post.find().lean()
    if (!posts?.length) {
        return res.status(400).json({ message: 'No posts found' })
    }
    res.json(posts)
}

const updatePost = async (req, res) => {
    const { id, title, body } = req.body
    if (!id || !title) {
        return res.status(400).json({ message: 'fields are required' })
    }
    const post = await Post.findById(id).exec()
    if (!post) {
        return res.status(400).json({ message: 'Post not found' })
    }
    post.title = title
    post.body = body
    const updatePost = await post.save()
    res.json(`'${updatePost.title}'update`)
}

const deletePost = async (req, res) => {
    const { id } = req.body
    const post = await Post.findById(id).exec()
    if (!post) {
        return res.status(400).json({ message: 'Post not found' })
    }
    const result = await post.deleteOne()
    const reply = `Post '${post.title}' ID '${post._id}' deleted`
    res.json(reply)
}
const getPostById = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id).lean()
    if (!post) {
        return res.status(400).json({ message: 'Post not found' })
    }
    res.json(post)
}

module.exports = {
    getAllPosts,
    createNewPost,
    getPostById,
    updatePost,
    deletePost
}