import axios from "axios";
import toast from "react-hot-toast";
// import { getCookie } from "../utils/cookies";
// baseUrL: 'http://localhost:8000/api',

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": 'application/json',
  },
});


// Interceptor to add token to request
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = getCookie("token");
    const Token =localStorage.getItem("Token")
    const token = JSON.parse(Token)
    // console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor for handling responses and token refresh logic
axiosInstance.interceptors.response.use(

  (response) => response.data,
  async (error) => {
  
    
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

const handleRequest = async (method, url, data = null, isMultipart = false) => {
// debugger
  try {
    const headers = isMultipart ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
    const response = await axiosInstance.request(
      method === 'DELETE' 
        ? { method, url, headers }
        : { method, url, data, headers }
    );
   
    return response;
  } catch (error) {
    const status = error?.response?.status;
    const message = error?.message || "Something went wrong. Please try again.";

    // Handle specific status codes
    switch (status) {
      case 401:
        toast.error("Unauthorized. Redirecting to login.");
        break;
      case 404:
        toast.error("Requested resource not found.");
        window.location.href = "/not-found";
        break;
      case 500:
        toast.error(error?.response?.data?.message);
        break;
      default:
        toast.error(message);
    }
    console.error(`${method} Error:`, error);
    throw error;
  }
};


export default handleRequest;
