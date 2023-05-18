import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from '../features/profileData';
import loginDataReducer from '../features/loginData';

export default configureStore({
  reducer: {
    profileData: fetchReducer,
    loginData: loginDataReducer,
  }
});