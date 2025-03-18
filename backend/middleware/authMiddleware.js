const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const authmiddleware = async (req,res,next)=>{
    try {
        const token = req.header('Authorization')?.replace('Bearer ','');

        if(!token){
            return res.status(401).json({message:'Access denied, no token provided'})
        }

        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decode._id);
        console.log(user)
        if(!user){
            return res.status(401).json({message:"Invalid token, user not found"})
        }
        req.user = user;
        next();
       
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(400).json({ message: 'Invalid or expired token' });
    
    }
}
module.exports = authmiddleware