import { createSlice } from "@reduxjs/toolkit";

import { signIn, signUp } from "../../api/userApi.js";

const initialState = {
  user: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: state => {
      state.isLoggedIn = false;
    },
    [signUp.fulfilled]: (state, action) => {},
    [signUp.rejected]: state => {
      state.isLoggedIn = false;
    },
    [signIn.pending]: state => {
      state.isLoggedIn = false;
    },
    [signIn.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoggedIn = true;
      state.user = action.payload.result;
    },
    [signIn.rejected]: state => {
      state.isLoggedIn = false;
    }
  }
});

export default authSlice.reducer;
