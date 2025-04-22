import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";
import handleRequest from "../axios/axiosInstance";
// Async thunk for fetching products



// ********************** fetch all product****************//
export const fetchProduct = createAsyncThunk("/api/getproduct", async (_,{ rejectWithValue }) => {
  try {
      //   ;
   const res = await handleRequest('GET','/api/getproduct');
  //  console.log(res.product,"get all data thunk")
   return res.product;
  } catch (error) {
    console.error("Error adding product:", error.response?.data || error.message);
    return rejectWithValue(error.response?.data || error.message);
  }
});
// **************************search Request ********************//
export const SearchThunk = createAsyncThunk("/api/search", async (query,{ rejectWithValue }) => {
  //  ;   
try {
  // console.log(query,"ldsffkkkkkkk")
 const res = await handleRequest('GET', `/api/search?query=${query}`);
 console.log(res.product,"get all data thunk search")
//     ;
 return res?.product;
} catch (error) {
  console.error("Error adding product:", error.response?.data || error.message);
  return rejectWithValue(error.response?.data || error.message);
}
});
  
  // *****************fetch single product *****************//
  
  export const fetchSingleProduct = createAsyncThunk("/api/getsingleproduct", async (id,{ rejectWithValue }) => {
    try {
        //   ;
     const res = await handleRequest('GET',`/api/getsingleproduct/${id}`);
    //  console.log(res,"get all data thunk")
     return res.product;
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  });
  

  //************************************ ADD TO CART**************************//

export const addtocart = createAsyncThunk("/api/addToCart", async({productId, quantity},{rejectWithValue})=>{
  //  ;
  try {
      const res = await handleRequest('POST','/api/addToCart',{productId, quantity})
      // console.log(res,"cart data added")
      return res.data;
  } catch (error) {
      console.error("Error addToCart",error?.res?.data || error.message);
      return rejectWithValue(error?.res?.data || error.message);
  }
})


//************************************ fetch cart items**************************//

export const getcartitem = createAsyncThunk("/api/getcartitem", async (_,{ rejectWithValue }) => {
  try {
    // console.log(formDatas,"ldsffkkkkkkk")
      //   ;
   const res = await handleRequest('GET','/api/getcartitem');
  //  console.log(res.data.items,"get all fetchCartItems  thunk")
   return res.data;
  } catch (error) {
    console.error("Error adding product:", error.response?.data || error.message);
    return rejectWithValue(error.response?.data || error.message);
  }
});

//******************************** update cart item ************************//

export const updatecartitem = createAsyncThunk("/api/updatecartitem", async ({productId, quantity},{ rejectWithValue }) => {
  try {
    // console.log(formDatas,"ldsffkkkkkkk")
      //   ;
   const res = await handleRequest('PUT',`/api/updatecartitem`, {productId,quantity});
  //  console.log(res,"DELETE Cart Item  thunk")
   return res.data;
  } catch (error) {
    console.error("Error adding product:", error.response?.data || error.message);
    return rejectWithValue(error.response?.data || error.message);
  }
});
//************************************ deletecartitem**************************//
export const deletecartitem = createAsyncThunk("/api/deletecartitem", async ({productId},{ rejectWithValue }) => {
  try {
    // console.log(formDatas,"ldsffkkkkkkk")
      //   ;
   const res = await handleRequest('DELETE',`/api/deletecartitem/${productId}`);
  //  console.log(res.data,"DELETE Cart Item  thunk")
   return res.data;
  } catch (error) {
    console.error("Error adding product:", error.response?.data || error.message);
    return rejectWithValue(error.response?.data || error.message);
  }
});

