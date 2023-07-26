import { FC, lazy } from 'react';

import { UserCardProps } from './UserCard';

export const UserCardAsync = lazy<FC<UserCardProps>>(
  () => import('./UserCard')
);
