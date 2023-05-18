import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectLogin } from "../utils/selectors.js";

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, thunkAPI) => {
    const token = selectLogin(thunkAPI.getState()).token;
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    //console.log(data);
    return data;
  }
)

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    status: 'idle',
    data: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.body;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export default profileSlice.reducer;