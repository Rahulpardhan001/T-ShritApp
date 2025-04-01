const productModel = require("../models/productModel");
const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs");
const { uploadOnCloudinary, deleteCloudinary } = require("../utills/cloudnary");

// ######################## Add Proudct controller #############################
// const addProductCtrl = async (req, res) => {
//   try {
//     const { productName, description, price, category, brandName, stock } = req.body;
//     // console.log(req.body, "ldjflsjdlfj");
//     // // console.log(req.files)
//     if (
//       !productName ||
//       !description ||
//       !price ||
//       !category ||
//       !brandName ||
//       !stock
//     ) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existing = await productModel.findOne({ productName });
//     if (existing) {
//       return res.status(400).json({ message: "Product already exists" });
//     }

//     // console.log(req.files)
//     const uploadimages = req?.files?.image;
//     const uploadedImages = await Promise.all(
//       uploadimages.map((img) => uploadOnCloudinary(img?.path))
//     );

//     const newProduct = new productModel({
//       productName,
//       description,
//       price,
//       category,
//       brandName,
//       stock,
//       image: uploadedImages.map((img) => img.secure_url), // Store Cloudinary URL
//     });

//     await newProduct.save();
//     return res.status(201).json({
//       success: true,
//       message: "Product added successfully",
//       product: uploadedImages,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };





const addProductCtrl = async (req, res) => {
  try {
    const products = req.body.products; // Expecting an array of products
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Products array is required" });
    }

    let savedProducts = [];

    for (const product of products) {
      const { productName, description, price, category, brandName, stock, images } = product;

      if (!productName || !description || !price || !category || !brandName || !stock) {
        return res.status(400).json({ message: "All fields are required for each product" });
      }

      // Check if the product already exists
      const existing = await productModel.findOne({ productName });
      if (existing) {
        return res.status(400).json({ message: `Product ${productName} already exists` });
      }

      // Upload images to Cloudinary for each product
      if (images && images.length > 0) {
        const uploadedImages = await Promise.all(
          images.map((imgPath) => uploadOnCloudinary(imgPath)) // Assuming imgPath is the path to the image
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

        const savedProduct = await newProduct.save();
        savedProducts.push(savedProduct);
      } else {
        return res.status(400).json({ message: "Each product must have at least one image" });
      }
    }

    return res.status(201).json({
      success: true,
      message: "Products added successfully",
      products: savedProducts, // Returning all saved products
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

    
    const imageUrl = product.image; // Assuming `image` is an array of image filenames

    // 🔹 Delete images from local `uploads/` folder
    // let imagePath;
    // imageUrl.map(async (img) => {
    //    imagePath = path.join(__dirname, "../uploads", img); // Construct full path
    // })
    //   console.log(imagePath,"image path is ")
    // fs.unlink(imagePath, (err) => {
    //   if (err) console.error("Error deleting file:", err);
    //   else console.log("Deleted:", imagePath);
    // });

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
    console.log(req.files, "update controller,data");
    const { id } = req.params;
    const { productName, description, price, category, brandName, stock } =
      req.body;

    // Find product by ID
    let product = await productModel.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

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

// ######################## search product #############################
const searchctrl = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Search query is required",product: [] });
    }
    const product = await productModel.find({
      $or: [
        { productName: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    
    if (!product) {
      return res.status(404).json({ message: "Product NOt Found!" });
    }

    res.status(200).json({ success: true, product });
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
  searchctrl,
};
