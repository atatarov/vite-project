import { IUser } from '@/shared/types/user';
import {
  DELETE_USER,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FILTER_USERS,
  UsersActionTypes,
} from '../types/users';

export interface UsersState {
  users: Array<IUser>;
  filteredUsers: Array<IUser>;
  isLoading: boolean;
  error: string;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  isLoading: false,
  error: '',
};

const usersReducer = (
  state = initialState,
  action: UsersActionTypes
): UsersState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
        isLoading: false,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case DELETE_USER: {
      const updatedUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      const updatedFilteredUsers = state.filteredUsers.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: updatedUsers,
        filteredUsers: updatedFilteredUsers,
      };
    }
    case FILTER_USERS: {
      const searchQuery = action.payload.toLowerCase().trim();
      const filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery) ||
          user.username.toLowerCase().includes(searchQuery) ||
          user.email.toLowerCase().includes(searchQuery)
      );
      return {
        ...state,
        filteredUsers,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
