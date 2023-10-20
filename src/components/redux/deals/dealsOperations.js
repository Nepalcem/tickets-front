import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "https://tickets-backend-7zsk.onrender.com";

export const fetchDeals = createAsyncThunk(
  "deals/fetchAll",
  async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/deals`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
