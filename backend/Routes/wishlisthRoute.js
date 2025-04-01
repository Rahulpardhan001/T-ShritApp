const express = require('express');
// const { addToCart, getAllCartItemCtrl, deleteCartItemCtrl, updateCartItemCtrl } = require('../controller/cartCtrl');
const { authmiddleware } = require('../middleware/authMiddleware');
const { addTowishlist, getwishlist, deletewishlistitem } = require('../controller/wishlistCtrl');
const wishlistRoute = express.Router();


wishlistRoute.post('/addtowishlist',authmiddleware, addTowishlist)
wishlistRoute.get('/getwishlistitem',authmiddleware,getwishlist)
wishlistRoute.delete('/deletewishlistitem/:id',authmiddleware,deletewishlistitem)



module.exports = wishlistRoute;