    const multer = require("multer");

// Configure storage (memory or disk)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed"), false);
    }
};

// Allow multiple file uploads (max 4 images)
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

module.exports = upload;
// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// // const cloudinary = require("./cloudinaryConfig");
// const cloudinary = require('./cloudnary')

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: "products", // Cloudinary folder
//         allowed_formats: ["jpg", "png", "jpeg"], // Allowed file types
//     },
// });

// const upload = multer({ storage });

// module.exports = upload;
