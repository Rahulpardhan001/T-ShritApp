const express = require('express');
const { addToCart, getAllCartItemCtrl, deleteCartItemCtrl, updateCartItemCtrl } = require('../controller/cartCtrl');
const { authmiddleware } = require('../middleware/authMiddleware');
const cartRoute = express.Router();


cartRoute.post('/addToCart',authmiddleware, addToCart)
cartRoute.get('/getcartitem',authmiddleware,getAllCartItemCtrl)
cartRoute.delete('/deletecartitem/:id',authmiddleware,deleteCartItemCtrl)
cartRoute.put('/updatecartitem',authmiddleware,updateCartItemCtrl)


module.exports = cartRoute;