const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const quizMasterSchema = new Schema({
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

const quizMaster = mongoose.model('quizMaster', quizMasterSchema)
module.exports = {quizMaster}