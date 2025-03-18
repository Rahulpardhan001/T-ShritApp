const express = require('express');
const { addProductCtrl, getproductCtrl, deleteproductctrl, updateproudctctrl, getSingleProductctrl } = require('../controller/productCtrl');
const upload = require('../utills/Multer')
const ProductRoute = express.Router()

ProductRoute.post("/addproduct",upload.fields([{name:"image",maxCount:4}]),addProductCtrl)
ProductRoute.get("/getproduct",getproductCtrl )
ProductRoute.delete('/deleteproduct/:id',deleteproductctrl)
ProductRoute.put('/updateproduct/:id',upload.fields([{name:"image",maxCount:4}]),updateproudctctrl)
ProductRoute.get('/getsingleproduct/:id',getSingleProductctrl)

module.exports = ProductRoute;

