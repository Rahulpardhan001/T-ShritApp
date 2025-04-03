import { createAsyncThunk } from "@reduxjs/toolkit";
import handleRequest from "../axios/axios";

export const signupThunk = createAsyncThunk('/user/register',async(formData, {rejectWithValue})=>{
try {
    //  ;
    const res = await handleRequest('POST','/user/register',formData);
    console.log(res)
    return res;
} catch (error) {
    console.log(error.message)
    return rejectWithValue(error.response?.data || error.message);
}
})

// login thunk

export const LoginThunk = createAsyncThunk('/user/login',async(formData, {rejectWithValue})=>{
    try {
        //  ;
        const res = await handleRequest('POST','/user/login',formData);
        console.log(res)
        return res;
    } catch (error) {
        console.log(error.message)
        return rejectWithValue(error.response?.data || error.message);
    }
    })