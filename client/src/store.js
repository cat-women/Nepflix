import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movie/movieSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    auth: authReducer
  }
});
