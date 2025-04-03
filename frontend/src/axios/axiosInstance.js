import axios from "axios";
// import toast from "react-hot-toast";
import {toast} from 'react-toastify'

const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://t-shritapp.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const Token = localStorage?.getItem("token");
    const token = JSON.parse(Token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("API Error:", error);

    return Promise.reject(error);
  }
);

const handleRequest = async (method, url, data = null, isMultipart = false) => {
  // debugger;
  try {
    const response = await axiosInstance.request(
      method === "DELETE"
        ? {
            method,
            url,
          }
        : {
            method,
            url,
            data,
          }
    );
    return response;
  } catch (error) {
    const status = error?.response?.status;
    const message = error?.message || "Something went wrong. Please try again.";

    // Handle specific status codes
    switch (status) {
      case 401:
        localStorage.clear();
        toast.error("Unauthorized. Redirecting to login.");
        window.location.href = "/";
        break;
      case 404:
        toast.error("Requested resource not found.");
        window.location.href = "/not-found";
        break;
      case 500:
        toast.error("Internal server error. Please try again later.");
        break;
      default:
        // Handle other errors or network issues
        toast.error(message);
    }
    console.error(`${method} Error:`, error);
    throw error;
  }
};

export default handleRequest;
