const mongoose = require("mongoose");
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

var userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastName : {
        type: String,
        maxlength: 32,
        trim: true
    },
    userInfo:{
        type: String,
        trim: true
    },
    email : {
        trim: true,
        required: true,
        type: String,
        unique: true
    },
    encry_password: {
        required: true,
        type: String
    },
    salt: String,
    role:{
        default: 0,
        type: Number
    },
    purchases : {
        type: Array,
        default: []
    }

});


userSchema.virtual("password")
    .set(function(password){
        this._password = password
        this.salt = uuidv1;
        this.encry_password = this.securePassword(password)

     })
    .get(function(){
        return this._password
    })




userSchema.method = {

    authenticate: function(plainpassword){

        return this.securePassword(plainpassword) === this.encry_password

    },
    securePassword: function(plainpassword){
        if(!password) return "";
        try {
            return crypto
            .createHmac("sha256" , this.salt)
            .update(plainpassword)
            .digest("hex");
            
        } catch (err) {
            return "";  
        }
    }
}








module.exports = mongoose.model("User" , userSchema);