import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';
import { useTasksSelector } from 'redux/selectors';
import { useFiltersSelector } from 'redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useTasksSelector();
  const statusFilter = useFiltersSelector();
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  if (!visibleTasks.length) {
    return <p>No tasks to display.</p>;
  }

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
