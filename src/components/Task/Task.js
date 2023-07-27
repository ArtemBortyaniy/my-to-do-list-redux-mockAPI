import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted, editTask } from 'redux/operations';
import { Button } from 'components/Button/Button';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task));

  const handleSubmitEditor = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(editTask({ updateTask: form.elements.text.value, id: task.id }));
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        defaultChecked={task.completed}
        onClick={handleToggle}
      />
      <form className={css.form} onSubmit={handleSubmitEditor}>
        <input
          className={css.field}
          type="text"
          name="text"
          placeholder="Enter task text..."
        />
        <Button type="submit">edit</Button>
      </form>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDeleteTask}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
