import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";

const initialState = {
  isLoading: false,
  isSignedUp: false,
  error: null,
  msg: "",
};

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async (data) => {
    const res = await publicPost("contractor", data);
    return res;
  }
);

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isSignedUp = true;
      state.error = null;
    });

    builder.addCase(signupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSignedUp = false;
      state.error = action.error.message;
    });
  },
});

export default signupSlice.reducer;
