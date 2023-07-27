import { useSelector } from 'react-redux';

// Custom hook to get tasks
export const useTasksSelector = () => {
  return useSelector(state => state.tasks);
};

export const useFiltersSelector = () => {
  return useSelector(state => state.filters.status);
};
