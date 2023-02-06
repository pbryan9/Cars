import { configureStore } from '@reduxjs/toolkit';
import carSliceReducer from './carSlice';
import singleCarReducer from './singleCarSlice';
import allMessagesReducer from './messagesSlice';
import singleMessageReducer from './singleMessageSlice';
import allDriversReducer from './driverSlice';

const store = configureStore({
  reducer: {
    cars: carSliceReducer,
    singleCar: singleCarReducer,
    allMessages: allMessagesReducer,
    singleMessage: singleMessageReducer,
    drivers: allDriversReducer,
  },
});

export default store;
