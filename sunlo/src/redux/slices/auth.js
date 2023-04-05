import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    code: null,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.code = null;
      localStorage.removeItem("token");
    },
    saveCode: (state, action) => {
      state.code = action.payload.code;
      localStorage.setItem("token", action.payload.code);
    },
  },
  extraReducers: () => {},
});

export const { logout, saveCode } = authSlice.actions;

export default authSlice.reducer;
