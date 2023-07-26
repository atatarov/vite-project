import { FiltersActionTypes, SET_SEARCH } from '../types/filters';

export const setSearch = (search: string): FiltersActionTypes => ({
  type: SET_SEARCH,
  payload: search,
});
