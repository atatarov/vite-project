export const SET_SEARCH = 'SET_SEARCH';

export interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload: string;
}

export type FiltersActionTypes = SetSearchAction;
