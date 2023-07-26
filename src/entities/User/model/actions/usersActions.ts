import { DELETE_USER, FILTER_USERS, UsersActionTypes } from '../types/users';

export const deleteUser = (userId: number): UsersActionTypes => ({
  type: DELETE_USER,
  payload: userId,
});

export const filterUsers = (filter: string): UsersActionTypes => ({
  type: FILTER_USERS,
  payload: filter,
});
