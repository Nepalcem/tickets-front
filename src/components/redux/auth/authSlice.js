import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import authOperations from "./authOperations";
import storage from "redux-persist/lib/storage";

const initialState = {
  username: "",
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      //Log-In
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.username = action.payload.user.username;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //Log-Out
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.username = "";
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state, action) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
      });
  },
});

const authReducer = authSlice.reducer;

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
