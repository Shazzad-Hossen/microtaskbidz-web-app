import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../services/signup/signupSlice";

export const store = configureStore({
  reducer: {
    signup: signReducer,
  },
});
