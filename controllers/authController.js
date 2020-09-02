const User = require("../models/User");
const jwt = require('jsonwebtoken');
const packageJson = require('../package.json');
require('dotenv').config();
const secret = process.env.SECRET

// error handler
const handleErrors = (err) => {
    let errors = { email: '', password: '' };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    // existing email
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, secret, {
        expiresIn: maxAge
    });
};

module.exports.signup_get = (req, res) => {
    res.send('signup');
}

module.exports.signup_post = async (req, res) => {
    const { first_name, last_name, email, password, isAdmin } = req.body;
    try {
        const user = await User.create({ first_name, last_name, email, password, isAdmin });
        const token = createToken(user.id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    }
    catch (err) {
        console.log(err)
        const errors = handleErrors(err);
        console.log(errors)
        res.status(400).json({ errors });
    }
}

module.exports.login_get = (req, res) => {
    res.render('login', {
        version: packageJson.version
    });
}

module.exports.login_post = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
}