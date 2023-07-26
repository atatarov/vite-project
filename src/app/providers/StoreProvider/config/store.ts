import { createStore, combineReducers, Store } from 'redux';

import { SelectedUserState, selectedUserReducer } from '@/entities/UserCard';
import usersReducer, {
  UsersState,
} from '@/entities/User/model/reducers/usersReducer';
import filtersReducer, {
  FiltersState,
} from '@/features/UserFilters/model/reducers/filterReducer';

export interface RootState {
  users: UsersState;
  selectedUser: SelectedUserState;
  filters: FiltersState;
}

const rootReducer = combineReducers<RootState>({
  users: usersReducer,
  selectedUser: selectedUserReducer,
  filters: filtersReducer,
});

const store: Store<RootState> = createStore(rootReducer);

export default store;
