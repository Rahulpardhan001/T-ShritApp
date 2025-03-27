const CartModel = require("../models/cartModel");
const productModel = require("../models/productModel");
const User = require("../models/userModel");
const responseHandler = require("../utills/responseHandler");

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    // const userId = req.user._id;
    const userId = '67d94d5332988ea09c6faa88'
    const productfind = await productModel.findById(productId);
    // console.log(productfind,"product found")
    let cart = await CartModel.findOne({ userId });
    // console.log(cart,"cart is s+++++++++++++++")
    if (!cart) {
      cart = new CartModel({ userId, items: [] });
    }
    const existingCart = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (existingCart) {
      existingCart.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    await cart.save();
    responseHandler.success(res,cart, "item added to cart");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, error);
  }
};

// *******************get all cart items *****************//
const getAllCartItemCtrl = async (req, res) => {
  try {
    const userId = "67d94d5332988ea09c6faa88";
    // const userId = req.user._id;
    const cartitem = await CartModel.findOne({ userId }).populate(
      "items.productId"
    );

    if (!cartitem) {
      return responseHandler.success(res, { message: "Cart is empty" }, 404);
    }
    // console.log(cartitem)
    return responseHandler.success(
      res,
      cartitem,
      "Fetch Cart items Successfully"
    );
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, error);
  }
};
// *******************Delete cart items *****************//
const deleteCartItemCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = '67d94d5332988ea09c6faa88'
    let cart = await CartModel.findOne({ userId });
    // console.log(cart);
    if (!cart) {
      return responseHandler.error(res, "cart not found", 404);
    }
    // cart.items = cart.items.filter((item) =>console.log(item.productId,"itemsli"));
    cart.items = cart.items.filter((item) => item.productId.toString() !== id);
    console.log(cart, "updated cart",id);
    
    await cart.save();
    return responseHandler.success(
      res,
      cart,
      "Item remove in cart Successfuly",
    );
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, error);
  }
};

// *******************update cart items *****************//
const updateCartItemCtrl = async (req, res) => {
  try {
    const { productId, newquantity } = req.body;
    const userId = req.user._id;
    // Validate request body
    if (!userId || !productId || !newquantity || newquantity <= 0) {
      return responseHandler.error(res, "Invalid request data", 400);
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return responseHandler.error(res, "product not found", 404);
    }

    if (product.stock === 0) {
      return responseHandler.success(res, "product Out of stock", 400);
    }

    let cart = await CartModel.findOne({ userId });
    const findIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (findIndex === -1) {
      return responseHandler.error(res, "product not found in cart", 404);
    }

    // Check if requested quantity exceeds available stock
    if (newquantity > product.stock) {
      return responseHandler.success(
        res,
        "Requested quantity exceeds available stock",
        400
      );
    }
    if (newquantity > 0) {
      cart.items[findIndex].quantity = newquantity;
    } else {
      cart.items.splice(findIndex, 1);
    }
    console.log(newquantity, "new");
    await cart.save();
    responseHandler.success(res, cart, "update cart successfully");
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, error);
  }
};

module.exports = {
  addToCart,
  getAllCartItemCtrl,
  deleteCartItemCtrl,
  updateCartItemCtrl,
};
