import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleMessage = createAsyncThunk(
  'messages/fetchSingleMessage',
  async (messageId) => {
    try {
      const { data } = await axios.get(`/api/messages/${messageId}`);
      return data;
    } catch (err) {
      console.error('Trouble fetching single message: ', err.message);
    }
  }
);

export const createSingleMessage = createAsyncThunk(
  'messages/createSingleMessage',
  async (messagePayload) => {
    try {
      const { data } = await axios.post('/api/messages', messagePayload);
      return data;
    } catch (err) {
      console.error('Trouble posting single message: ', err.message);
    }
  }
);

export const deleteSingleMessage = createAsyncThunk(
  'messages/deleteSingleMessage',
  async (messageId) => {
    try {
      await axios.delete(`/api/messages/${messageId}`);
    } catch (err) {
      console.error('Trouble deleting single message: ', err.message);
    }
  }
);

const singleMessageSlice = createSlice({
  name: 'singleMessage',
  initialState: {},
  reducers: {
    clearSingleMessage: (state, action) => {
      return {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleMessage.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(createSingleMessage.fulfilled, (state, { payload }) => {
        return payload;
      });
  },
});

export const selectSingleMessage = (state) => state.singleMessage;

export const { clearSingleMessage } = singleMessageSlice.actions;

export default singleMessageSlice.reducer;
