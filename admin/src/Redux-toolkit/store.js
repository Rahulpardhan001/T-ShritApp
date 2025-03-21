import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import authSlice from "./Slice/authSlice";
import orderSlice from "./Slice/orderSlice";


const store = configureStore({
    reducer:{
        Product:productSlice,
        auth:authSlice,
        order:orderSlice
    }
})

export default store;

