import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleCar = createAsyncThunk(
  "singleCar/fetchSingleCar",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/cars/${id}`);
      return data;
    } catch (err) {
      console.error(`Trouble fetching car ${id}`, err.message);
    }
  }
);

const createSingleCarSlice = createSlice({
  name: "singleCar",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCar.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const selectSingleCar = (state) => state.singleCar;
export default createSingleCarSlice.reducer;
