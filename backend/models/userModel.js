const mongoose = require('mongoose');

/* User Models for the Sign-in and Register Page*/
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, dropDups: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false } /**Admin passthrough */
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;