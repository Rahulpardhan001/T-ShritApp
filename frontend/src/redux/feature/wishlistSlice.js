import { createSlice }from "@reduxjs/toolkit"
// import { getwishlist } from "../../Thunk/productThunk"
import { toast } from "react-toastify"
import { addwishlist, deleteWishlistItem, getwishlist } from "../../Thunk/wishlistThunk"



const wishlistSlice = createSlice({
name:'wishlist',
initialState:{
    items:[],
    state:'idle',
    loading:true,
    error: null
},
reducers:{

},
extraReducers:(builder)=>{
    builder
        // *********************** addwishlist *************************//

     .addCase(addwishlist.pending,(state)=>{
        state.loading = true
        state.error = null
     })
     .addCase(addwishlist.fulfilled, (state,action)=>{
        state.loading =false
        // console.log(action.payload, "addwishlist item fulfilled")
        toast.success(action.payload.message)
        state.items = action.payload.wishlist.productId

    })
    .addCase(addwishlist.rejected, (state, action) => {
        state.loading =true
        // toast.warn("error added in wishlist")
        state.error = action.payload || 'Failed to add  wishlist ';
      })

         // *********************** getwishlist *************************//

     .addCase(getwishlist.pending,(state)=>{
        state.loading = true
        state.error = null
     })
     .addCase(getwishlist.fulfilled, (state,action)=>{
        state.loading =false
        console.log(action.payload,"what data")
        toast.success(action.payload.message)
        state.items = action.payload.wishlist.productId

    })
    .addCase(getwishlist.rejected, (state, action) => {
        state.loading =true
        // toast.warn(action.payload.message)
        state.error = action.payload || 'Failed to get  wishlist ';
      })
      
         // *********************** Delete wishlist *************************//

     .addCase(deleteWishlistItem.pending,(state)=>{
        state.loading = true
        state.error = null
     })
     .addCase(deleteWishlistItem.fulfilled, (state,action)=>{
        state.loading =false
        console.log(action.payload,"what data")
        toast.success(action.payload.message)
        // state.items = action.payload.wishlist.productId

    })
    .addCase(deleteWishlistItem.rejected, (state, action) => {
        state.loading =true
        // toast.warn(action.payload.message)
        state.error = action.payload || 'Failed to get  wishlist ';
      })
      
}
})


export const {clearwishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer