const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name :{
        type:String,
        maxLength: 50,
        required:true,
    },
    email :{
        type:String,
        maxLength:30,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    }
})

module.exports = mongoose.model("User" ,UserSchema);

