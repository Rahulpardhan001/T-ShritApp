const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
    }

},{timeseries:true})

userSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10);
    return next()
})

userSchema.methods.isPasswordCompare = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
  return  jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:'1d'
    }
    )
}

const User = mongoose.model('User',userSchema);
module.exports = User;