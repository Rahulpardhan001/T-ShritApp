const productModel = require("../models/productModel");
const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs");
const { uploadOnCloudinary, deleteCloudinary } = require("../utills/cloudnary");

// ######################## Add Proudct controller #############################
const addProductCtrl = async (req, res) => {
  try {
    const { productName, description, price, category, brandName, stock } =
      req.body;
    console.log(req.body, "ldjflsjdlfj");
    // // console.log(req.files)
    if (
      !productName ||
      !description ||
      !price ||
      !category ||
      !brandName ||
      !stock
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await productModel.findOne({ productName });
    if (existing) {
      return res.status(400).json({ message: "Product already exists" });
    }

    // console.log(req.files.image[0]?.path)
    const uploadimages = req?.files?.image;
    const uploadedImages = await Promise.all(
      uploadimages.map((img) => uploadOnCloudinary(img?.path))
    );

    const newProduct = new productModel({
      productName,
      description,
      price,
      category,
      brandName,
      stock,
      image: uploadedImages.map((img) => img.secure_url), // Store Cloudinary URL
    });

    await newProduct.save();
    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: uploadedImages,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ######################## get All Products #############################
const getproductCtrl = async (req, res) => {
  try {
    // console.log('get prodct')
    const product = await productModel.find();
    if (!product || product.length === 0) {
      return res
        .status(204)
        .json({ success: true, message: "No products found" });
    }

    res.status(200).json({
      success: true,
      message: "Fetch all Product lists.",
      product: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ######################## Delete one product #############################
const deleteproductctrl = async (req, res) => {
  try {
    const id = req.params.id;
    // const product = await productModel.findByIdAndDelete(req.params.id);
    const product = await productModel.findOne({ _id: id });

    const imageUrl = product.image; // Assuming `image` is an array of image names

    if (Array.isArray(imageUrl) && imageUrl.length > 0) {
      await Promise.all(
        imageUrl.map(async (img) => {
          return await deleteCloudinary(img); // Pass `img` to the function
        })
      );
    }

    await productModel.findByIdAndDelete(id);
    // console.log(product.image,"find product is ")
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product Delete Successfuly" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ######################## Get single product #############################
const getSingleProductctrl = async (req, res) => {
  try {
    const id = req.params.id;

    const findProduct = await productModel.findById(id);
    if (!findProduct) {
      return res
        .status(404)
        .json({ success: false, message: "product not found!" });
    }
    res.status(200).json({
      success: true,
      message: "Product find Successfuly",
      product: findProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ######################## Update product #############################
const updateproudctctrl = async (req, res) => {
  try {
    console.log(req.files,"update controller,data")
    const { id } = req.params;
    const { productName, description, price, category, brandName, stock } =req.body;

    // Find product by ID
    let product = await productModel.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Delete cloudinary present image then update
    // const imageUrl = product?.image;
    // if (Array.isArray(imageUrl) && imageUrl.length > 0) {
    //   await Promise.all(
    //     imageUrl.map(async (img) => {
    //       return await deleteCloudinary(img); // Pass `img` to the function
    //     })
    //   );
    // }
    // now update image
    let uploadedImages = [];
    if (req.files?.image) {
      const uploadimages = req.files.image;

      uploadedImages = await Promise.all(
        uploadimages.map(async (img) => {
          return await uploadOnCloudinary(img?.path);
        })
      );
    }
    // Update product fields
    product.productName = productName || product.productName;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.brandName = brandName || product.brandName;
    product.stock = stock || product.stock;
    // If new images are uploaded, update the images array
    if (uploadedImages.length > 0) {
      let res = uploadedImages.map((img) => img.secure_url);
      product.image.push(res);
    }

    // Save updated product
    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addProductCtrl,
  getproductCtrl,
  deleteproductctrl,
  updateproudctctrl,
  getSingleProductctrl,
};
