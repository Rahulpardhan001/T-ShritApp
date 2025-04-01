
import { createSlice } from "@reduxjs/toolkit";
import { addtocart, deletecartitem, getcartitem, updatecartitem } from "../../Thunk/productThunk";
import { toast } from "react-toastify";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        totalPrice:0,
        status: 'idle',
        loading:true,
        error:null
    },
    reducers:{
        clearCart: (state) => {
        state.items = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
      },},
    extraReducers: (builder)=>{
    builder
    // ***********************addto cart*************************//
            .addCase(addtocart.pending, (state)=>{
                state.loading =true
                state.error = null
            })
            .addCase(addtocart.fulfilled, (state,action)=>{
                state.loading =false
                toast.success("Item Added in cart Successfully")
                state.items = action.payload.items
        
            })
            .addCase(addtocart.rejected, (state, action) => {
                state.loading =true
                state.error = action.payload || 'Failed to add to cart';
              })
                  // ***********************fetcthcart*************************//

                  .addCase(getcartitem.pending, (state)=>{
                    state.loading =true
                    state.error = null
                })
                .addCase(getcartitem.fulfilled, (state,action)=>{
                    state.loading = false
                    state.items = action.payload.items
                })
                .addCase(getcartitem.rejected, (state, action) => {
                    state.loading =true
                    state.error = action.payload || 'Failed to add to cart';
                  })
                    // ***********************updatecart*************************//

                    .addCase(updatecartitem.pending, (state)=>{
                        state.loading =true
                        state.error = null
                    })
                    .addCase(updatecartitem.fulfilled, (state,action)=>{
                        state.loading =false
                        state.items = action.payload.items
                    })
                    .addCase(updatecartitem.rejected, (state, action) => {
                        state.loading =true
                        state.error = action.payload || 'Failed to update to cart';
                      })

                      // ***********************deletecart*************************//

                    // .addCase(deletecartitem.pending, (state)=>{
                    //     state.status ='loading',
                    //     state.error = null
                    // })
                    // .addCase(deletecartitem.fulfilled, (state,action)=>{
                    //     state.status ='succeeded',
                    //     state.items = action.payload.items
                    // })
                    // .addCase(deletecartitem.rejected, (state, action) => {
                    //     state.status = 'failed';
                    //     state.error = action.payload || 'Failed to update to cart';
                    //   })
    }
})

export const {clearCart} = cartSlice.actions;
export default cartSlice.reducer