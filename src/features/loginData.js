import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'login/login',
  async({ username, password }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: "POST",
      body: JSON.stringify({
        email: username,
        password: password
      }),
      headers: {
        "Content-Type" : "application/json",
      }
    });
    const data = await response.json();
    return data;
  }
)

export const logout = createAsyncThunk(
  'login/logout', 
  async () => {localStorage.removeItem('token'); 
});


const loginSlice = createSlice({
  name: 'login',
  initialState: {
    status: 'idle',
    data: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.body.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
      state.status = 'idle';
      state.token = null;
    });
  }
})

export default loginSlice.reducer;