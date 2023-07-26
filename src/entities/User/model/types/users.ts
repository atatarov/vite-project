import { IUser } from '@/shared/types/user';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const DELETE_USER = 'DELETE_USER';
export const FILTER_USERS = 'FILTER_USERS';

export interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: number;
}

export interface FilterUsersAction {
  type: typeof FILTER_USERS;
  payload: string;
}

interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: Array<IUser>;
}

interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  error: string;
}

export type UsersActionTypes =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction
  | DeleteUserAction
  | FilterUsersAction;
