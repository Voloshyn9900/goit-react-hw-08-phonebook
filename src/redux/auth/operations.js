import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

};

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const fetchRefreshUser = createAsyncThunk(
  'auth/fetchRefreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const { token } = state.auth;
    console.log(token);

    if (!token) {
      return thunkAPI.rejectWithValue("Not have token");
    }
    try {
      setAuthToken(token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


