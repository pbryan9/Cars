import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllDrivers = createAsyncThunk(
  'drivers/fetchAllDrivers',
  async () => {
    try {
      const { data } = await axios.get('/api/drivers');
      return data;
    } catch (err) {
      console.error('Trouble fetching all drivers:', err.message);
    }
  }
);

const allDriversSlice = createSlice({
  name: 'drivers',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchAllDrivers.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const selectAllDrivers = (state) => state.drivers;

export default allDriversSlice.reducer;
