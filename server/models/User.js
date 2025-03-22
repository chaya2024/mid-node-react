const mongoose = require('mongoose') 
const userSchema = new mongoose.Schema( {
name:{
    type:String,
    required:true,
},
username:{
    type:String,
    required:true,
    immutable:true,
},
email:{
    type:String,
    trim:true,
},
address:{
    type:String,
    required:true,
},
phone:{
    type:String,
    required:true,
    minLength: 10,
}},
{
    timestamps:true
})
module.exports = mongoose.model('User', userSchema)