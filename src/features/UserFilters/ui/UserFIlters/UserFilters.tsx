import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@/shared/ui/Box';
import { Input } from '@/shared/ui/Input';
import { getSearch } from '../../model/selectors/getSearch';
import { filterUsers } from '@/entities/User';
import { setSearch } from '../../model/actions/filters';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { Button } from '@/shared/ui/Button';
import style from './UserFilters.module.scss';

interface UserFiltersProps {
  onResetSearch: () => void;
}

export const UserFilters = ({ onResetSearch }: UserFiltersProps) => {
  const dispatch = useDispatch();
  const search = useSelector(getSearch);

  const filterData = useCallback(
    (filter: string) => {
      dispatch(filterUsers(filter));
    },
    [dispatch]
  );

  const debouncedFilterData = useDebounce(filterData, 300);

  const handleSearchChange = useCallback(
    (search: string) => {
      dispatch(setSearch(search));
      debouncedFilterData(search);
    },
    [dispatch, debouncedFilterData]
  );

  const handleResetSearch = () => {
    dispatch(setSearch(''));
    onResetSearch();
  };

  return (
    <Box className={style.Search}>
      <Input
        className={style.Input}
        onChange={handleSearchChange}
        value={search}
        placeholder={'Search'}
      />
      <Button onClick={handleResetSearch} className={style.Button}>
        Reset
      </Button>
    </Box>
  );
};
