import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";

const initialState = {
  isLoading: false,
  isSignedIn: false,
  error: null,
  msg: "",
};

export const signinUser = createAsyncThunk(
  "signin/signinUser",
  async (data) => {
    const res = await publicPost("user/signin", data);
    return res;
  }
);

export const signinSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signinUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signinUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isSignedIn = true;
      state.error = null;
    });

    builder.addCase(signinUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSignedIn = false;
      state.error = action.error.message;
    });
  },
});

export default signinSlice.reducer;
