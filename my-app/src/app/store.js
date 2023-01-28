import { configureStore } from '@reduxjs/toolkit';
import DataReducer from '../features/DataSlice';
import FilterReducer from '../features/FilterSlice';
import ArrayReducer from '../features/ArraySlice';


export const Store = configureStore({
  reducer: {
    data: DataReducer,
    filter: FilterReducer,
    array: ArrayReducer,
  },
});
