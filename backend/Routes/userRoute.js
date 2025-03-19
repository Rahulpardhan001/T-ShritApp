const express = require('express');
const { LoginCtrl, registerCtrl, changeCurrentPassword } = require('../controller/userCtrl');
const {authmiddleware, isAdmin} = require('../middleware/authMiddleware')
const userRoute = express.Router();


userRoute.post('/login',LoginCtrl)
userRoute.post('/register',registerCtrl)
userRoute.post('/changepassword',authmiddleware,changeCurrentPassword)

module.exports = userRoute;