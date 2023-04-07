import { createSlice } from '@reduxjs/toolkit';

import { getMovies } from '../../api/movieApi.js';

const initialState = {
  movies: [],
  isLoading: true
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.pending]: state => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [getMovies.rejected]: state => {
      state.isLoading = false;
    }
  }
});
export default movieSlice.reducer;
