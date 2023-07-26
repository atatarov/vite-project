import { memo } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import style from './UserCard.module.scss';
import { getSelectedUser } from '../../model/selectors/getSelectedUser';
import UserCardText from '../UserCardText/UserCardText';
import { Box } from '@/shared/ui/Box';

export interface UserCardProps {
  className?: string;
}

const UserCard = memo(({ className }: UserCardProps) => {
  const user = useSelector(getSelectedUser).selectedUser;

  return (
    <Box className={classNames(style.UserCard, {}, [className])}>
      <UserCardText title="Name" text={user?.name} />
      <UserCardText title="Username" text={user?.username} />
      <UserCardText title="Email" text={user?.email} />
    </Box>
  );
});

export default UserCard;