// *****************************wishlist ****************************//

import { createAsyncThunk } from "@reduxjs/toolkit";
import handleRequest from "../axios/axiosInstance";

export const addwishlist = createAsyncThunk('/addtowishlist', async ({productId}, { rejectWithValue }) => {
    // console.log(productId,"thunk add to wishlist send id")
     try {
     const res = await handleRequest('POST','/addtowishlist',{productId})
    //  console.log("response ",res)
      return res; 
     } catch (error) {
      console.log(error)
      // return rejectWithValue(error.response?.data?.message || 'Failed to add item to wishlist');
      return rejectWithValue(
        error.response?.message || 'Failed to add item to wishlist'
      );
   
     }     // Ensure you're returning the array of products
    }
  );

  // ***************************** Get wishlist items ****************************//

export const getwishlist = createAsyncThunk('/getwishlistitem', async (_, { rejectWithValue }) => {
    try {
        const res = await handleRequest('GET','/getwishlistitem')
        // debugger;   
    //  console.log("response commee ",res)
      return res; 
     } catch (error) {
      console.log(error)
      // return rejectWithValue(error.response?.data?.message || 'Failed to add item to wishlist');
      return rejectWithValue(
        error.response?.message || 'Failed to get wishlist items'
      );
   
     }     // Ensure you're returning the array of products
    }
  );
  // ***************************** Delelte wishlist items ****************************//

  export const deleteWishlistItem = createAsyncThunk("/deletewishlistitem", async (id,{ rejectWithValue }) => {
    try {
     const res = await handleRequest('DELETE',`/deletewishlistitem/${id}`);
     console.log(res,"DELETE wishlist Item  thunk")
     return res;
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  });