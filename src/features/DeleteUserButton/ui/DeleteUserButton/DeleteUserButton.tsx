import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { deleteUser } from '@/entities/User';

interface DeleteUserButtonProps {
  id: number;
  className?: string;
}

export const DeleteUserButton = ({ className, id }: DeleteUserButtonProps) => {
  const dispatch = useDispatch();

  const handleDeleteUser = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      dispatch(deleteUser(id));
    },
    [dispatch, id]
  );

  return (
    <Button
      onClick={handleDeleteUser}
      className={classNames('', {}, [className])}
    >
      Delete user
    </Button>
  );
};
