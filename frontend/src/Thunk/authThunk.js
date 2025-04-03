import handleRequest from "../axios/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk('/user/register',async(formData, {rejectWithValue})=>{
    try {
        //  ;
        const res = await handleRequest('POST','/user/register',formData);
        // console.log(res,"user detail")
        return res;
    } catch (error) {
        console.log(error.message)
        return rejectWithValue(error.response?.data || error.message);
    }
    })

export const userLogin = createAsyncThunk('/user/login',async(userData, {rejectWithValue})=>{
    try {
        //  ;
        const res = await handleRequest('POST','/user/login',userData);
        // console.log(res,"my login response")
        return res;
    } catch (error) {
        console.log(error.message)
        return rejectWithValue(error.response?.data || error.message);
    }
    })


    export const changepassword = createAsyncThunk("/user/changepassword", async ({ oldPassword, newPassword }, { rejectWithValue }) => { 

          try {
            //  ;
            const res = await handleRequest("POST", "/user/changepassword", { oldPassword, newPassword });
            // console.log(res, "password change success");
            return res;
          } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.response?.data || error.message);
          }
        }
      );
      