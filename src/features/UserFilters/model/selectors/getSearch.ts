import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getSearch = (state: RootState) => state.filters.search;
