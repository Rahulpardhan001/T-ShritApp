import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import handleRequest from "../axios/axios";


// **************************Add Product Thunk ********************//

export const AddProduct = createAsyncThunk("/addproduct", async (formDatas, { rejectWithValue }) => {
  try {
    // console.log(formDatas,"ldsffkkkkkkk")
    //  ;
    const response = await handleRequest('POST','/addproduct',formDatas, true)

    console.log(response, "Product added successfully");
    toast.success(response.message)
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error.response || error.message);
    return rejectWithValue(error.response || error.message);
  }
});

// **************************Get All product ********************//

export const GetProduct = createAsyncThunk("/getproduct", async (_,{ rejectWithValue }) => {
    //  ;   
  try {
    // console.log(formDatas,"ldsffkkkkkkk")
   const res = await handleRequest('GET','/getproduct');
  //  console.log(res.product,"get all data thunk")
//     ;
   return res?.product;
  } catch (error) {
    console.error("Error adding product:", error.response?.data || error.message);
    return rejectWithValue(error.response?.data || error.message);
  }
});


// **************************Get single product ********************//

export const GetSingleProduct = createAsyncThunk("/getsingleproduct", async (id,{ rejectWithValue }) => {
  //  ;   
try {
  // console.log(formDatas,"ldsffkkkkkkk")
 const res = await handleRequest('GET',`/getsingleproduct/${id}`);
 console.log(res.product,"get single data thunk")
//     ;
 return res?.product;
} catch (error) {
  console.error("Error adding product:", error.response?.data || error.message);
  return rejectWithValue(error.response?.data || error.message);
}
});


// **************************Delete Request ********************//
export const DeleteProduct = createAsyncThunk("/deleteproduct", async (id,{ rejectWithValue }) => {
  //  ;   

try {
 const res = await handleRequest('DELETE',`/deleteproduct/${id}`);
 console.log(res.product,"delete data thunk")
//     ;
 return res;
} catch (error) {
  console.error("Error Delete product:", error.response?.data || error.message);
  return rejectWithValue(error.response?.data || error.message);
}
});

// **************************Proudct update Request ********************//

export const UpdateProduct = createAsyncThunk("/updateproduct", async ( {id, formDatas} , { rejectWithValue }) => {
  console.log(formDatas.image,"thunk datalsllfjsdklj")
//  ;
  try {
    
      const res = await handleRequest("PUT", `/updateproduct/${id}`, formDatas, true);
      console.log("Updated Product Data:", res);
      return res;
    } catch (error) {
      console.error("Error Updating Product:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || "Failed to update product.");
    }
  }
);

// **************************search Request ********************//



export const SearchThunk = createAsyncThunk("/search", async (query,{ rejectWithValue }) => {
  //  ;   
try {
  console.log(query,"ldsffkkkkkkk")
 const res = await handleRequest('GET', `/search?query=${query}`);
 console.log(res.product,"get all data thunk search")
//     ;
 return res?.product;
} catch (error) {
  console.error("Error adding product:", error.response?.data || error.message);
  return rejectWithValue(error.response?.data || error.message);
}
});