import css from './TaskCounter.module.css';
import { useTasksSelector } from 'redux/selectors';

export const TaskCounter = () => {
  const tasks = useTasksSelector();
  let count = { active: 0, completed: 0 }; // Set the initial value to { active: 0, completed: 0 }

  if (tasks && tasks.length > 0) {
    // Check if tasks is not empty and has at least one task
    count = tasks.reduce((acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    }, count); // Use the initial value for the reduce function
  }

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
