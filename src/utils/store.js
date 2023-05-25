import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from '../features/profileData';
import loginDataReducer from '../features/loginData';
import updateDataReducer from '../features/updateData';

export default configureStore({
  reducer: {
    profileData: fetchReducer,
    loginData: loginDataReducer,
    updateData: updateDataReducer
  }
});