import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../services/signup/signupSlice";
import signinReducer from "../services/signin/signinSlice";
import navReducer from "../services/navtext/navtextSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    navText: navReducer,
  },
});
