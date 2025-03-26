const express = require('express');
const { addToCart, getAllCartItemCtrl, deleteCartItemCtrl, updateCartItemCtrl } = require('../controller/cartCtrl');
const cartRoute = express.Router();


cartRoute.post('/addToCart', addToCart)
cartRoute.get('/getcartitem',getAllCartItemCtrl)
cartRoute.delete('/deletecartitem',deleteCartItemCtrl)
cartRoute.put('/updatecartitem',updateCartItemCtrl)


module.exports = cartRoute;