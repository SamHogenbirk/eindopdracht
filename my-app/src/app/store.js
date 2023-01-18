import { configureStore } from '@reduxjs/toolkit';
import DataReducer from '../features/DataSlice';

export const Store = configureStore({
  reducer: {
    data: DataReducer,

  },
});
