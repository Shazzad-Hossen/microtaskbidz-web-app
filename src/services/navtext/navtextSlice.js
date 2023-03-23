import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHomeR: true,
  value: null,
};

export const navSlice = createSlice({
  name: "navText",
  initialState,
  reducers: {
    home: (state) => {
      state.isHomeR = true;
      state.value = null;
    },

    signin: (state) => {
      state.isHomeR = false;
      state.value = "Sign In";
    },
    signup: (state) => {
      state.isHomeR = false;
      state.value = "Sign UP";
    },
    dboard: (state) => {
      state.isHomeR = false;
      state.value = "Dashboard";
    },
    about: (state) => {
      state.isHomeR = false;
      state.value = "About";
    },
  },
});

export const { home, signin, signup, dboard } = navSlice.actions;

export default navSlice.reducer;
