import { memo, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserCardModal } from '@/entities/UserCard';
import { IUser } from '@/shared/types/user';
import { setSelectedUser } from '@/entities/UserCard/model/actions/setSelectedUser';
import { UserItem, fetchUsers } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DeleteUserButton } from '@/features/DeleteUserButton';
import { getUsers } from '@/entities/User/model/selectors/users';
import { Box } from '@/shared/ui/Box';
import { Text } from '@/shared/ui/Text';
import { UserFilters } from '@/features/UserFilters';
import { getSearch } from '@/features/UserFilters/model/selectors/getSearch';

export const UserCatalog = memo(() => {
  const fetchUsersData = useCallback(async () => {
    await fetchUsers();
  }, []);

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  const { filteredUsers, isLoading, error } = useSelector(getUsers);
  const search = useSelector(getSearch);

  const [isUserModal, setIsUserModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsUserModal(false);
    setTimeout(() => setIsMounted(false), 150);
  }, []);

  const onShowModal = useCallback(
    (user: IUser) => {
      dispatch(setSelectedUser(user));
      setIsMounted(true);
      setTimeout(() => setIsUserModal(true), 100);
    },
    [dispatch]
  );

  if (isLoading) {
    return (
      <Box>
        <Text text="Fetching data..."></Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Text text="Something wrong! Try again later..."></Text>
      </Box>
    );
  }

  return (
    <>
      <UserFilters onResetSearch={fetchUsersData} />
      <ul className={classNames('')}>
        {filteredUsers.map((user) => {
          return (
            <UserItem
              onClick={onShowModal}
              key={user.id}
              user={user}
              button={<DeleteUserButton id={user.id} />}
              searchText={search}
            />
          );
        })}
      </ul>
      {isMounted && (
        <UserCardModal isOpen={isUserModal} onClose={onCloseModal} />
      )}
    </>
  );
});
