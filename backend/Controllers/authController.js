const User = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const login = ( async (req, res) => {
    const {email, password} = req.body;
    try {

        const findUser = await User.findOne({email})
        const comparedPass = await bcrypt.compare(password, findUser.password)
        
        if(!findUser || !comparedPass) {
            return res.status(400).json({message: "email and password are incorrect!"})
        }

        const token = jwt.sign({
            id: findUser._id,
            email: findUser.email
        }, process.env.JWT_SECRET, {expiresIn: '1h' })

        res.status(200).json({message: "Successfully login", token})
    } catch (error) {
        res.status(404).json({message: "Error"})
    }
})

const signUp = ( async (req, res) => {   
    const { password, email } = req.body 
    try {

        const findUser = await User.findOne({email})
        if(findUser) {
            return res.status(500).json({message: "email already been used!"})
        }

        const hashPass = await bcrypt.hash(password, 10)
        req.body.password = hashPass;

        await User.create(req.body)
        res.status(200).json({message: "user has been created"})
    } catch (error) {
        res.status(404).json({message: "Unable to Create an account"})
    }
})


module.exports = { login, signUp}