const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // role_id: {}
})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel