import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://tickets-backend-7zsk.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/register", credentials);
      toast.success(
        "Registration completed! You may now go to the Login page."
      );
      return data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Ooops. Something went wrong");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);

    token.set(data.token);
    return data;
  } catch (error) {
    toast.error("Ooops. Something went wrong. Try again!");
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
    toast.success("You've successfully logged out from your account!");
  } catch (error) {
    toast.error("Ooops. Something went wrong. Try again!");
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};
export default authOperations;