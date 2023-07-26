import { IUser } from '@/shared/types/user';
import {
  SET_SELECTED_USER,
  SelectedUserActionTypes,
} from '../types/selectedUser';

export interface SelectedUserState {
  selectedUser: IUser | null;
}

const initialState: SelectedUserState = {
  selectedUser: null,
};

const selectedUserReducer = (
  state = initialState,
  action: SelectedUserActionTypes
): SelectedUserState => {
  switch (action.type) {
    case SET_SELECTED_USER:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};

export default selectedUserReducer;
