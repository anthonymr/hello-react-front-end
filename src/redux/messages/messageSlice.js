import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: '',
  loaded: false,
};

export const getMessage = createAsyncThunk(
  'message/getMessage',
  async () => {
    const response = await axios.get('http://localhost:3000/api/v1/messages/random');
    return response.data.text;
  },
);

const messageSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMessage.fulfilled, (state, { payload }) => ({
      ...state,
      loaded: true,
      message: payload,
    }));
  },
});

export default messageSlice.reducer;
