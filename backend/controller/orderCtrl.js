const orderModel = require("../models/orderModel");

const placeOrderCtrl = async (req, res) => {
  try {
    const { orderItems, orderPrice, address } = req.body;

    // Validation checks
    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "Order items are required" });
    }
    if (!orderPrice || orderPrice <= 0) {
      return res.status(400).json({ message: "Invalid order price" });
    }
    if (!address) {
      return res.status(400).json({ message: "Delivery address is required" });
    }
    // console.log(req.user._id);
    const order = new orderModel({
      user: req.user._id,
      orderItems,
      orderPrice,
      address,
    });
    await order.save();
    res.status(201).json({ message: "Order placed successfuly", order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// **************Get All Order ************//
const getAllOrderCtrl = async (rea, res) => {
  try {
    const order = await orderModel
      .find()
      .populate("user", "userName email")
      
    // console.log(order, "data is");
    res.status(201).json( order);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteOrderCtrl = async (req,res)=>{
    try {
        const order = await orderModel.findById(req.params.id)
        if(!order){
            return res.status(404).json({ message: "Order not found" });
        }
        await order.deleteOne();
        res.status(200).json({message:'Order delete successfully'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
       
    }
}

module.exports = { placeOrderCtrl, getAllOrderCtrl,deleteOrderCtrl };
