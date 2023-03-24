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
  async (data, { rejectWithValue }) => {
    const { name, email, password, confpass } = data;
    const body = { name, email, password };

    if (name.length < 5) {
      return rejectWithValue("NAME_ERROR");
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return rejectWithValue("EMAIL_ERROR");
    } else if (password.length < 8) {
      return rejectWithValue("PASS_ERROR");
    } else if (confpass.length < 8 || password !== confpass) {
      return rejectWithValue("CONFPASS_ERROR");
    } else {
      try {
        const res = await publicPost("contractor", body);
        return res;
      } catch (error) {
        return rejectWithValue(error.res);
      }
    }
  }
);

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetstate: (state) => {
      state.isSignedUp = false;
    },
  },
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
      state.error = action.payload;
    });
  },
});

export const { resetstate } = signupSlice.actions;

export default signupSlice.reducer;
