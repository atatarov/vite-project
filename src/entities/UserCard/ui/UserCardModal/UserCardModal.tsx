import { Suspense, memo } from 'react';

import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { UserCardAsync } from '../UserCard/UserCard.async';

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserCardModal = memo(({ isOpen, onClose }: UserModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <UserCardAsync />
      </Suspense>
    </Modal>
  );
});
