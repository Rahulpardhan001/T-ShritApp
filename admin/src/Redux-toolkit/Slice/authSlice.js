import { createSlice } from "@reduxjs/toolkit";
import { LoginThunk, signupThunk } from "../../Thunk/authThunk";
import toast from "react-hot-toast";
import { Navigate, redirect, useNavigate } from "react-router-dom";



const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        token: null,
        error: null,
        loading: false,
        passwordModel: false,
        profileModel: false,
        logoutModel: false
    },
    reducers:{},
    extraReducers:(builder)=>{
            builder
            // signUp
      .addCase(signupThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message)
        state.error = null;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    // **************Login *****************//
      .addCase(LoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginThunk.fulfilled, (state, action) => {
      
        state.loading = false
        console.log(action.payload.Token)
        localStorage.setItem('Token',JSON.stringify(action.payload.Token))
        toast.success(action.payload.message)
        redirect('/')
        // Navigate('/')
        state.error = null;
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.error = action.error.message;
      })
    }
})

export const {} = authSlice.actions;
export default authSlice.reducer;