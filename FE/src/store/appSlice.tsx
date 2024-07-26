import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    email: "",
    firstName: "",
    lastName: "",
  },
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.auth = { ...state.auth, ...action.payload };
    },
    setAuth: (state, action) => {
      state.auth = { ...action.payload };
    },
    clearAuth: (state) => {
      state.auth = { ...initialState.auth };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { updateAuth, setAuth, clearAuth, setLoading } = appSlice.actions;
export const getLoading = (state: any) => state.app.loading;
export const getAuth = (state: any) => state.app.auth;
export default appSlice.reducer;
