import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:8000/';
axios.defaults.baseURL = url;

export const getMovies = createAsyncThunk('movie', async thunkAPI => {
  try {
    const resp = await axios('movie');
    return resp.data;
  } catch (error) {
    console.log('movie api error', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
