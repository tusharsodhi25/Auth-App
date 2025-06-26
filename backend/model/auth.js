const mongoose = require('mongoose');


const authSchema = mongoose.Schema({
    

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','admin'],
        default:"student"
    }

})

module.exports = mongoose.model("auth",authSchema);