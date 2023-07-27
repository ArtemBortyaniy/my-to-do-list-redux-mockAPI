import { statusFilters } from './constants';
import { combineReducers } from 'redux';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

const tasksReducer = (state = '', action) => {
  switch (action.type) {
    case 'task/addTask':
      return [...state, action.payload];
    case 'task/deleteTask':
      return state.filter(task => task.id !== action.payload);
    case 'task/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

// const tasksInitialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     state: statusFilters.all,
//   },
// };

// export const rootReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case 'task/addTask': {
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     }

//     case 'task/deleteTask': {
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };
//     }

//     case 'task/toggleCompleted': {
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }

//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     }

//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };
