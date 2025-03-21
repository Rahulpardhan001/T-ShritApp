const express = require('express');
const { placeOrderCtrl, getAllOrderCtrl, deleteOrderCtrl } = require('../controller/orderCtrl');
const { authmiddleware, isAdmin } = require('../middleware/authMiddleware');
const OrderRoute = express.Router();


 OrderRoute.post('/order',authmiddleware,placeOrderCtrl)
 OrderRoute.get('/getallorder',authmiddleware,isAdmin,getAllOrderCtrl)
 OrderRoute.post('/deleteorder/:id',authmiddleware,isAdmin,deleteOrderCtrl)

module.exports = OrderRoute;