import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllMessages = createAsyncThunk(
  'messages/fetchAllMessages',
  async () => {
    try {
      const { data } = await axios.get('/api/messages');
      return data;
    } catch (err) {
      console.error('Trouble fetching all messages: ', err.message);
    }
  }
);

const allMessagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchAllMessages.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const selectAllMessages = (state) => state.allMessages;

export default allMessagesSlice.reducer;
