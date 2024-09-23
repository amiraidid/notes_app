const mongoose =require('mongoose')

const userModel = mongoose.Schema({
    firstName: {
        type: String,
        ruquire: true
    },
    lastName:{
        type: String,
        ruquire: true
    },
    email: {
        type: String,
        ruquire: true
    },
    password: {
        type: String,
        ruquire: true
    }
},{ timestamps: true });

const user = mongoose.model('user', userModel);
module.exports = user