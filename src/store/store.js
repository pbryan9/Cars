import { configureStore } from '@reduxjs/toolkit';
import carSliceReducer from './carSlice';

const store = configureStore({
  reducer: {
    cars: carSliceReducer,
  },
});

export default store;
