import { configureStore } from "@reduxjs/toolkit";
import carSliceReducer from "./carSlice";
import singleCarReducer from "./singleCarSlice";

const store = configureStore({
  reducer: {
    cars: carSliceReducer,
    singleCar: singleCarReducer,
  },
});

export default store;
