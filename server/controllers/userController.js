const User = require("../models/User")
const createNewUser= async(req, res)=>{
    const{name,username,email,address,phone}= req.body
    if(!name){
        return res.status(400).json({message: 'name is required'})
    }
    if(!username){
        return res.status(400).json({message: 'username is required'})
    }if(!address){
        return res.status(400).json({message: 'address is required'})
    }if(!phone){
        return res.status(400).json({message: 'phone is required'})
    }
    const user= await User.create({name,username,email,address,phone})
    if(user){
        return res.status(201).json({ message: 'New user created'})
    }
    else{
        return res.status(400).json({ message: 'Invalid user'})
    }
}

const getAllUsers= async(req,res)=>{
    const users=await User.find().lean()
    if(!users?.length){
        return res.status(400).json({message: 'No users found'})
    }
    res.json(users)
}

const updateUser= async(req,res)=>{
    const {id, name,email,address,phone}= req.body
    if(!id||(!name&&!address&&!phone)){
        return res.status(400).json({message: 'fields are required'})
    }
    const user= await User.findById(id).exec()
    if(!user){
        return res.status(400).json({ message: 'User not found'})
    }

    user.name= name || user.name
    user.email=email || user.email
    user.address=address|| user.address
    user.phone=phone|| user.phone
    const updateUser= await user.save()
    res.json(`${updateUser.name} update`)
}

const deleteUser= async(req,res)=>{
    const{id}=req.body
    const user= await User.findById(id).exec()
    if(!user){
        return res.status(400).json({ message: 'User not found'})
    }
    const result= await user.deleteOne()
    const reply= `User ${result.name} ID ${result.id} deleted`
    res.json(reply)
}
const getUserById= async(req,res)=>{
    const {id}= req.params
    const user=await User.findById(id).lean()
    if(!user){
        return res.status(400).json({ message: 'User not found'})
    }
    res.json(user)
}

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUser,
    deleteUser
    }