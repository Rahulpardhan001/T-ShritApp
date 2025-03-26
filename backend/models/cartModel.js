const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    items:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity:{
            type: Number,
            required:true,
            min:1
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const CartModel = mongoose.model("cart",cartSchema)

module.exports = CartModel;