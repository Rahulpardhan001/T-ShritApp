const cloudinary = require("cloudinary").v2;
const fs = require('fs') 

// const connectCloudinary = async ()=>{
  
// }
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY,
})
// module.exports = connectCloudinary;

 const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary    
     const res =  await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        // file has been upload successfuly
        // console.log("file uploaded on cloudinary",res.url);
        return res;
    } catch (error) {
        fs.unlinkSync(localFilePath) 
        return null;
    }
}

// **************Delete cloudinary image*************//
const deleteCloudinary = async(imageUrl)=>{
    // Extract public_id from the image URL
    // console.log("+++++++++++++++++++++++++++++++")
    try{
    const publicId = imageUrl.split("/").pop().split(".")[0];

    // Delete image from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    console.log(`Deleted from Cloudinary: ${publicId}`, result);
    return result;
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    return null;
  }
    }

module.exports = {uploadOnCloudinary, deleteCloudinary}

  
