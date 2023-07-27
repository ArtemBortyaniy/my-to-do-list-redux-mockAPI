import { nanoid } from 'nanoid';

export const AddTask = text => {
  return {
    type: 'task/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'task/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'task/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
