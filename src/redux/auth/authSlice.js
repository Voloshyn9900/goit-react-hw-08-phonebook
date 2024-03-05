import { createSlice } from '@reduxjs/toolkit';
import {
  fetchLogIn,
  fetchRefreshUser,
  fetchRegister,
  fetchlogOut,
} from './operations';

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
      .addCase(fetchlogOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
      })
      .addCase(fetchLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogin = true;
        state.token = action.payload.token;
      })
      .addCase(fetchRefreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchRefreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
