const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim: true
    },
     Email:{
            type:String,
            required:true,
            trim: true
        },
    Password: {
            type:String,
            required:true,
            trim: true
        }
})

const User = mongoose.model('User',userSchema);

module.exports = User;