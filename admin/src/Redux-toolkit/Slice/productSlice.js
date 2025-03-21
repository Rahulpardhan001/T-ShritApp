import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";
import {
  AddProduct,
  DeleteProduct,
  GetProduct,
  GetSingleProduct,
  SearchThunk,
  UpdateProduct,
} from "../../Thunk/ProductThunk";
import toast from "react-hot-toast";

const productSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    status: "idle",
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // *****************get product*******************//
      .addCase(GetProduct.fulfilled, (state, action) => {
        // console.log(action.payload,"meeeeeeeeeeeeeeeeeeeeeee")
        state.products = action.payload || [];
        // state.products.push(action.payload);
        state.status = "success";
        state.isLoading = false;
        // toast.success(action.payload.message);
      })
      .addCase(GetProduct.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(GetProduct.rejected, (state, action) => {
        state.status = action.error;
        state.error = action.error;
      })

      // *****************get single product*******************//
      .addCase(GetSingleProduct.fulfilled, (state, action) => {
        // console.log(action.payload,"meeeeeeeeeeeeeeeeeeeeeee")
        state.products = action.payload || [];
        // state.products.push(action.payload);
        state.status = "success";
        state.isLoading = false;
        // toast.success(action.payload.message);
      })
      .addCase(GetSingleProduct.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(GetSingleProduct.rejected, (state, action) => {
        state.status = action.error;
        state.error = action.error;
      })
      // *****************get update product*******************//
      .addCase(UpdateProduct.fulfilled, (state, action) => {
        // console.log(action.payload,"meeeeeeeeeeeeeeeeeeeeeee")
        state.products = action.payload || [];
        // state.products.push(action.payload);
        toast.success(action.payload.message);
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(UpdateProduct.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(UpdateProduct.rejected, (state, action) => {
        state.status = action.error;
        state.error = action.error;
      })

      // *****************Delete product*******************//
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        // console.log(action.meta.arg, "arg is si sis");
        state.products = state.products.filter(
          (p) => p._id !== action.meta.arg
        );
        state.status = "success";
        toast.success(action.payload.message);
        state.isLoading = false;
      })
      .addCase(DeleteProduct.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(DeleteProduct.rejected, (state, action) => {
        state.status = action.error;
        // debugger;
        // toast.error("product can't deleted")
        state.error = action.payload.message;
      })
      
     
      // *****************search product*******************//
      .addCase(SearchThunk.fulfilled, (state, action) => {
        console.log(action.payload,"meeeeeeeeeeeeeeeeeeeeeee")
        state.products = action.payload || [];
        // state.products.push(action.payload);
        state.status = "success";
        state.isLoading = false;
        // toast.success(action.payload.message);
      })
      .addCase(SearchThunk.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(SearchThunk.rejected, (state, action) => {
        state.status = action.error;
        state.error = action.error;
      })
  },
});

export default productSlice.reducer;
