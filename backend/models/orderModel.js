const mongoose = require('mongoose');

const orderItemShema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})


const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderPrice:{
        type:Number,
        required:true
    },
    orderItems:{
        type:[orderItemShema]
    },
    address:{
        type:String,
        required:true,
    },
    Status:{
        type:String,
        enum:["pending","cancelled","delivered"],
        Default:"pending"
    }
})

const orderModel = mongoose.model("Order",OrderSchema);
module.exports = orderModel;