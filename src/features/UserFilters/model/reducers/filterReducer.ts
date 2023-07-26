import { FiltersActionTypes, SET_SEARCH } from '../types/filters';

export interface FiltersState {
  search: string;
}

const initialState: FiltersState = {
  search: '',
};

const filtersReducer = (
  state = initialState,
  action: FiltersActionTypes
): FiltersState => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
