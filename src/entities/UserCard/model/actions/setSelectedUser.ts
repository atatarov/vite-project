import { IUser } from '@/shared/types/user';
import {
  SET_SELECTED_USER,
  SelectedUserActionTypes,
} from '../types/selectedUser';

export const setSelectedUser = (
  user: IUser | null
): SelectedUserActionTypes => ({
  type: SET_SELECTED_USER,
  payload: user,
});
