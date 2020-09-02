const User = require("../models/User");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.signup_post = (req, res) => {
    res.send('new signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.login_post = (req, res) => {
    res.send('user login');
}