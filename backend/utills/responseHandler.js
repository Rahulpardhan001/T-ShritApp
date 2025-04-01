// utils/responseHandler.js

const responseHandler = {
    success: (res, data, message = "Success", statusCode = 200) => {
      return res.status(statusCode).json({
        success: true,
        message,
        data,
      });
    },
  
    error: (res, error, statusCode = 500) => {
      return res.status(statusCode).json({
        success: false,
        message: error.message || "Internal Server Error",
        error: error.errors || null, // In case of validation errors
      });
    },
  };
  
  module.exports = responseHandler;
  