import authSlice from "./feature/authSlice";

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/productSlice";
import cartSlice from "./feature/cartSlice";
import wishlistSlice from "./feature/wishlistSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        product:productSlice,
        cart: cartSlice,
        wishlist:wishlistSlice
    }
})