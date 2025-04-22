const Wishlist = require("../models/wishlistModel");
// const responseHandler = require("../utills/responseHandler");


// **************** Add to Wishlist **************** //
const addTowishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user._id;

    let wishlist = await Wishlist.findOne({ userId });
    //  console.log(wishlist.productId.includes(productId),"important to know")
    if (wishlist) {
      if (wishlist.productId.some((id) => id.toString() === productId)) {
        return res
          .status(208)
          .json({ success: true, message: "Product already in wishlist",wishlist });
      }
      wishlist.productId.push(productId);
    } else {
      wishlist = new Wishlist({ userId, productId: [productId] });
    }
    await wishlist.save();
   return res
      .status(200)
      .json({ success: true, message: "Product Added to Wishlist", wishlist });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// **************** getto Wishlist **************** //
const getwishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const wishlist = await Wishlist.findOne({ userId }).populate("productId");
    // console.log(userId,"wish", wishlist)
    if (!wishlist) {
      return res.status(204).json({ success: true, message: "Wishlist is Empty" });
    }

    return res.status(200).send({ success: true, wishlist });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


const deletewishlistitem = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id,"di")
    const productId = id;
    const userId = req.user._id;
    const wishlist = await Wishlist.findOne({ userId });

    // console.log(userId, productId, wishlist);
    if (!wishlist) {
      res.status(404).json({ message: "wishlist not found" });
    }
    wishlist.productId = wishlist.productId.filter(
      (id) => id.toString() !== productId
    );

    await wishlist.save();
    res.status(200).send({
      success: true,
      message: "wishlist item removed successfully",
      wishlist,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
module.exports = { addTowishlist, getwishlist, deletewishlistitem };
