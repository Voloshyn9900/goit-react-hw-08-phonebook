import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
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

export const fetchLogIn = createAsyncThunk(
  'auth/fetchLogIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthToken(response.data.token);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchlogOut = createAsyncThunk(
  'auth/fetchlogOut',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchRefreshUser = createAsyncThunk(
  'auth/fetchRefreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    if (!state.auth.token) {
      return thunkAPI.rejectWithValue('Not have token');
    }
    try {
      setAuthToken(state.auth.token);
      const response = await axios.get('/users/current');
      console.log(axios.defaults);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


