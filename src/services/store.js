import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../services/signup/signupSlice";
import signinReducer from "../services/signin/signinSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
  },
});
