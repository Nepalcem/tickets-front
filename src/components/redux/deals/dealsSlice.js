import { createSlice } from "@reduxjs/toolkit";
import { fetchDeals } from "./dealsOperations";

const initialState = {
  deals: [],
  isLoading: false,
};

export const dealsSlice = createSlice({
  name: "deals",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deals = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});


