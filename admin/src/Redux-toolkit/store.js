import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";


const store = configureStore({
    reducer:{
        Product:productSlice 
    }
})

export default store;

