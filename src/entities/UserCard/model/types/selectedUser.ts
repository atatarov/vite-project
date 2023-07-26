import { IUser } from "@/shared/types/user";

export const SET_SELECTED_USER = 'SET_SELECTED_USER';

export interface SetSelectedUserAction {
  type: typeof SET_SELECTED_USER;
  payload: IUser | null;
}

export type SelectedUserActionTypes = SetSelectedUserAction;
