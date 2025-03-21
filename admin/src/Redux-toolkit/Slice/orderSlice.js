import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { OrderThunk } from "../../Thunk/orderThunk";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    status: "idle",
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // *****************get product*******************//
      .addCase(OrderThunk.fulfilled, (state, action) => {
        console.log(action.payload,"meeeeeeeeeeeeeeeeeeeeeee")
        state.order = action.payload || [];
        // state.products.push(action.payload);
        state.status = "success";
        state.isLoading = false;
        // toast.success(action.payload.message);
      })
      .addCase(OrderThunk.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(OrderThunk.rejected, (state, action) => {
        state.status = action.error;
        state.error = action.error;
      })

   
  },
});

export default orderSlice.reducer;
