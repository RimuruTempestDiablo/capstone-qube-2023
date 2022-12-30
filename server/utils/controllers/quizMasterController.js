const quizMaster = require ('../models/quizMaster');

const index = (req, res, next) => {
    quizMaster.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}   

const show = (req, res, next) => {
    let quizmasterID = req.body.quizmasterID
    quizMaster.findById(quizmasterID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            messge: 'An error occured!'
        })
    })
}

const store = (req, res, next) => {
    let quizmaster = new quizMaster({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })
    quizmaster.save()
    .then(response => {
        res.json({
            message: 'Quiz Master Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            messge: 'An error occured!'
        })
    })
}

const update = (req, res , next) => {
    let quizmasterID = req.body.quizmasterID

    let updatedData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }
    quizMaster.findByIdAndUpdate(quizmasterID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Quiz Master Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            messge: 'An error occured!'
        })
    })
}

const destroy = (req, res, next) => {
    let quizmasterID = req.body.quizMaster
    quizMaster.findByIdAndRemove(quizmasterID)
    .then(() =>{
        res.json({
            message: 'Quiz Master Deleted Successfully'
        })
    })
    .catch(error => {
        res.json({
            messge: 'An error occured!'
        })
    })
}

module.exports =  {
    index, show, store, update, destroy
}