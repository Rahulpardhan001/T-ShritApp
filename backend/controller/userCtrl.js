const User = require("../models/userModel");
const bcrypt = require("bcrypt")

// ##################### Register Controller ##################//
const registerCtrl =async(req,res)=>{
try {
    const {username,email,password} = req.body;

if([username, email, password].some((field)=>field?.trim() ==='')){
        return res.status(400).json({success:true, message:"All field are required"});

}

    const userExist = await User.findOne({email:email});
    if(userExist){
        return res.status(403).json({success:true, message:"User Already Exist."});
    }
  
    const newUser = new User({
        username,
        email,
        password,
    });
    const user = await newUser.save();
    res.status(201).json({success:true, message:"User Register Successful!",user})

} catch (error) {
    console.log(error)
    res.status(500).json({sucess:false, message:"Server side Error!"});
}
}

// ##################### Login Controller ##################//
const LoginCtrl =async(req,res)=>{
    try {
      const {email,username, password} = req.body;
      if(!email || ! password){
        res.status(400).json({success:true, message:"All field are required"});
      }
      const user = await User.findOne({$or:[{username},{email}]});
    //   console.log(user,"fufdjslfj")
      if(!user){
        return res.status(403).json({success:false, message:"user not found!"});
      }
      
     const isPasswordValid= await user.isPasswordCompare(password);
     if(!isPasswordValid){
        return res.status(401).json({success:true, message:"Invalid user credentials"});
     }
     const Token = user.generateAccessToken();
    //  console.log(Token,"tokdk")
    res.status(201).json({
        success:true,
        message:"Login Successful",
        Token,
        username:user.username,
    })
    
    } catch (error) {
        console.log(error)
        res.status(500).json({sucess:false, message:"Server side Error!"});
    }
}

// ##################### Change current password Controller ##################//

const changeCurrentPassword = async(req,res)=>{
    const {oldPassword,newPassword} = req.body;
    const user = await User.findById(req.user?.id);
  const isPasswordCompare =   await user.isPasswordCompare(oldPassword);
    if(!isPasswordCompare){
        return res.status(400).json("Invalid old Password")
    }
    user.password = newPassword;
    await user.save({validateBeforeSave:false})
    return res.status(200).json({message:"Password Update successfully"})
}

module.exports = {registerCtrl, LoginCtrl,changeCurrentPassword}