const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        immutable: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        trim: true
    },
    address:{
        type: mongoose.Schema.Types.String
    },
    phone:{
        type: mongoose.Schema.Types.String,
        minLength: 10
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('User', userSchema)