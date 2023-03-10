const mongoose  = require('mongoose')
const Schema    = require.Schema

const userSchema = new Schema({
    name : {
        type: String
    },
    email : {
        type: String
    },
    phone : {
        type: String
    },
    password : {
        type: String 
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = {User}