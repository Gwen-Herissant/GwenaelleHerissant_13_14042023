import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectLogin } from "../utils/selectors.js";

export const updateData = createAsyncThunk(
  'data/updateData',
  async ({firstname, lastname}, thunkAPI) => {
    const token = selectLogin(thunkAPI.getState()).token;
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      body: JSON.stringify({
        firstName: firstname, 
        lastName: lastname
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const data = await response.json();
    return data;
  }
);

const updateDataSlice = createSlice({
  name: 'update',
  initialState: {
    status: 'idle',
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.body;
      })
      .addCase(updateData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})

export default updateDataSlice.reducer;