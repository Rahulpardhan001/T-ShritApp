import { createSlice } from "@reduxjs/toolkit";
import { SearchThunk, fetchProduct, fetchSingleProduct } from "../../Thunk/productThunk";


// Product Slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    singleProduct:null,
    loading: false,
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Set the fetched products into state
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message
      })
      
      // single page products
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload; // Set the fetched single product into state
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message
      })
       // *****************search product*******************//
       .addCase(SearchThunk.fulfilled, (state, action) => {
        // console.log(action.payload,"meeeeeeeeeeeeeeeeeeeeeee")
        state.products = action.payload || [];
        // state.products.push(action.payload);
        state.status = "success";
        state.loading = false;
        // toast.success(action.payload.message);
      })
      .addCase(SearchThunk.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(SearchThunk.rejected, (state, action) => {
        state.status = action.error;
        state.error = action.error;
      })
      

  },
});

export default productSlice.reducer;
