import { configureStore } from '@reduxjs/toolkit';
import DataReducer from '../features/DataSlice';
import ChartReducer from '../features/ChartSlice';

export const Store = configureStore({
  reducer: {
    data: DataReducer,
    chart: ChartReducer,
  },
})
