import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './features/tasksSlice';
import { filtersReducer } from './features/filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
