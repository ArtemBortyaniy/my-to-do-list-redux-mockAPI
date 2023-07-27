import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const App = () => {
  const dicpatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dicpatch(fetchTasks());
  }, [dicpatch]);
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
