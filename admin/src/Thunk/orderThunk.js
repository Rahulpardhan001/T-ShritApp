import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import handleRequest from "../axios/axios";


// **************************Add Product Thunk ********************//
export const OrderThunk = createAsyncThunk("/getallorder", async (_, { rejectWithValue }) => {
    try {
        // console.log(formDatas,"ldsffkkkkkkk")
       const res = await handleRequest('GET','/getallorder');
       console.log(res,"get all data order thunk")
    //    debugger;
       return res;
      } catch (error) {
        console.error("Error adding product:", error.response?.data || error.message);
        return rejectWithValue(error.response?.data || error.message);
      }
});
