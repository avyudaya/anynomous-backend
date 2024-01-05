const User = require('../models/user.model');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
    const {name, email, password} = req.body;

    if(email === undefined) {
        res.status(400).send({message: 'Enter email.'});
        return;
    }
    if(name === undefined) {
        res.status(400).send({message: 'Enter name.'});
        return;
    }
    if(password === undefined) {
        res.status(400).send({message: 'Enter password.'});
        return;
    }

    const userExists = await User.findOne({ email });

    if(userExists){
        res.status(400).send({message: 'User already exists'});
        return;
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user){
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400).send({message: 'Invalid user data'});
    }
}

const loginUser = (req, res) => {
    res.send('hello');
}

const logoutUser = (req, res) => {
    res.send('hello');
}

module.exports = {registerUser, loginUser, logoutUser};