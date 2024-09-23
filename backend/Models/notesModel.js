const mongoose = require('mongoose')

const notesModel = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    } 
}, { timestamps: true });

const notes = mongoose.model('notes', notesModel)
module.exports = notes