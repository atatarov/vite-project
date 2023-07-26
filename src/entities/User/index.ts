import { deleteUser, filterUsers } from './model/actions/usersActions';
import usersReducer from './model/reducers/usersReducer';
import { getUsers } from './model/selectors/users';
import { UserItem } from './ui/UserItem/UserItem';
import { UsersActionTypes } from './model/types/users';
import { fetchUsers } from './model/services/fetchUsers';

export {
  UserItem,
  usersReducer,
  deleteUser,
  getUsers,
  fetchUsers,
  filterUsers,
};
export type { UsersActionTypes };
