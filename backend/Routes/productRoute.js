const express = require('express');
const { addProductCtrl, getproductCtrl, deleteproductctrl, updateproudctctrl, getSingleProductctrl, searchctrl } = require('../controller/productCtrl');
const upload = require('../utills/Multer');
const { isAdmin, authmiddleware } = require('../middleware/authMiddleware');
const ProductRoute = express.Router()

ProductRoute.post("/addproduct",upload.fields([{name:"image",maxCount:4}]),addProductCtrl)
ProductRoute.get("/getproduct",authmiddleware,getproductCtrl )
ProductRoute.delete('/deleteproduct/:id',authmiddleware,isAdmin,deleteproductctrl)
ProductRoute.put('/updateproduct/:id',upload.fields([{name:"image",maxCount:4}]),updateproudctctrl)
ProductRoute.get('/getsingleproduct/:id',getSingleProductctrl)
ProductRoute.get('/search',searchctrl)
module.exports = ProductRoute;

