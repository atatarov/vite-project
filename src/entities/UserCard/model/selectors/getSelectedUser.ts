import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getSelectedUser = (state: RootState) => state.selectedUser;
