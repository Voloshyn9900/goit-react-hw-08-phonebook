import { createSlice } from '@reduxjs/toolkit';
import { fetchRefreshUser, fetchRegister } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLogin: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(fetchRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(fetchRefreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(fetchRefreshUser.rejected, (state) => {
         state.isRefreshing = false;
      });
  },
});
console.log(authSlice);
export const authReducer = authSlice.reducer;
