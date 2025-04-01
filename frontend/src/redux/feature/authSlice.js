import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { userLogin, userRegister } from "../../Thunk/authThunk";

// Get token from localStorage
const storedToken = localStorage.getItem('token');

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    token:storedToken|| null,
    status: "idle",
    role: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // toast.info('Logged out successfully!');
    },
  },
  extraReducers: (builder) => {
    builder
      // **************userRegister *****************//

      .addCase(userRegister.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      // Register Fulfilled
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload.username;
        state.role = action.payload.role;
        toast.success("User registered successfully!");
      })

      .addCase(userRegister.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(`Registration failed ${action.payload.message}`);
      })

      // **************userLogin *****************//
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        debugger;
        state.user = action.payload.username;
        localStorage.setItem("user",JSON.stringify(action.payload.username))
        // console.log(action.payload,"klfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjls")
        state.token = action.payload.Token;
        localStorage.setItem("token",JSON.stringify(action.payload.Token));
        toast.success(action.payload.message);
      })
      // Login Rejected
      .addCase(userLogin.rejected, (state, action) => {
        // debugger;
        state.error = action.payload;
        // toast.error(`Login failed ${action.payload.message}`);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
