import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getUsers = (state: RootState) => state.users;
