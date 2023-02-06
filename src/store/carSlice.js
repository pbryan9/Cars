import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAllCars = createAsyncThunk('cars/fetchAllCars', async () => {
  try {
    const { data } = await axios.get('/api/cars');
    return data;
  } catch (err) {
    console.error('Trouble fetching all cars: ', err.message);
  }
});

const carSlice = createSlice({
  name: 'cars',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchAllCars.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

const selectAllCars = (state) => state.cars;

export default carSlice.reducer;

export { fetchAllCars, selectAllCars };
