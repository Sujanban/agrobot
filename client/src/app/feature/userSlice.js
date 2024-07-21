import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";

// register user
export const addUser = createAsyncThunk(
  "user/addUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/auth/register", user);
      if (res.data.error) return rejectWithValue(res.data.error);
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // register user
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = null;
      toast.success(action.payload.message);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      toast.error(action.payload);
    });
  },
});

export default userSlice.reducer;
