import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

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
      return rejectWithValue(err.message);
    }
  }
);

// login user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/auth/login", user);
      console.log(res.data);
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      if (res.data.error) return rejectWithValue(res.data.error);
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

export const logoutUser = () => {
  localStorage.removeItem("user");
  return {
    data: null,
    isAuthenticated: false,
    error: null,
    loading: false,
  };
};

const checkUserExistonLocalStorage = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return null;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: checkUserExistonLocalStorage(),
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.data = null;
      state.isAuthenticated = false;
      state.error = null;
      state.loading = false;
    },
  },
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

    // login user
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.user;
      state.error = null;
      toast.success(action.payload.message);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      toast.error(action.payload);
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;