import { getUsers } from '@/shared/api/api';
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from '../types/users';
import store from '@/app/providers/StoreProvider/config/store';

export const fetchUsers = async () => {
  store.dispatch({ type: FETCH_USERS_REQUEST });

  try {
    const usersData = await getUsers();
    store.dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: usersData,
    });
  } catch (error) {
    store.dispatch({
      type: FETCH_USERS_FAILURE,
      error: String(error),
    });
  }
};
