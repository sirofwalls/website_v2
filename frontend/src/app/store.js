import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mail/mailSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
