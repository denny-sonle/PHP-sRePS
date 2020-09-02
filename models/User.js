const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter your first name.']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email.'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password.']
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Hashing password before the object is saved to the db.
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;