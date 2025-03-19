import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import authSlice from "./Slice/authSlice";


const store = configureStore({
    reducer:{
        Product:productSlice,
        auth:authSlice
    }
})

export default store;

