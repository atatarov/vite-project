import { ReactNode, memo, useCallback } from 'react';

import style from './UserItem.module.scss';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { IUser } from '@/shared/types/user';
import { Box } from '@/shared/ui/Box';

interface UserListItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
  button?: ReactNode;
  searchText?: string;
}

export const UserItem = memo(
  ({ user, onClick, button, searchText }: UserListItemProps) => {
    const handleUserItemClick = useCallback(
      (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.preventDefault();
        onClick(user);
      },
      [onClick, user]
    );

    return (
      <>
        <li
          onClick={handleUserItemClick}
          className={classNames(style.UserItem)}
        >
          <Box className={style.Card}>
            <Text
              highlightText={searchText}
              text={user.name}
              variant="h2"
              className={style.CardHeader}
            ></Text>
            <Box className={style.CardWrapper}>
              username:
              <Text
                highlightText={searchText}
                text={user.username}
                variant="span"
                className={style.CardData}
              ></Text>
            </Box>
            <Box className={style.CardWrapper}>
              email:
              <Text
                highlightText={searchText}
                text={user.email}
                variant="span"
                className={style.CardData}
              ></Text>
            </Box>
          </Box>
          {button}
        </li>
      </>
    );
  }
);
