import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters } from '../../redux/constants';
import { useFiltersSelector } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useFiltersSelector();

  const handleChangeFilter = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleChangeFilter(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleChangeFilter(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleChangeFilter(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
