
const mongoose = require('mongoose')


const wishlistSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    productId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
        },
    ]
})

const Wishlist = mongoose.model('wishlist',wishlistSchema)

module.exports = Wishlist;