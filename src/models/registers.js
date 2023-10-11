const mongoose = require('mongoose');

const emoloyeeschema = new mongoose.Schema({
    firstname : {
        type: String,
        required : true
    },
    lastname : {
        type: String,
        required : true
    },
    Email : {
        type : String,
        required : true,
        uniqe : true
    },
    password : {
        type: String,
        required : true,
        unique : true
    },
    gender : {
        type : String , 
        required : true
    },
    phone : {
        type: Number,
        required : true,
        uniqe : true
    },
})

const Register = new mongoose.model("Register" ,emoloyeeschema );

module.exports = Register ; 