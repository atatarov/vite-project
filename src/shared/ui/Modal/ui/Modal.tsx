import { ReactNode } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Box } from '@/shared/ui/Box';

import { Portal } from '../../Portal/ui/Portal';
import style from './Modal.module.scss';
import { Overlay } from '../../Overlay/ui/Overlay';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const mods: Mods = {
    [style.opened]: isOpen,
  };

  const { close } = useModal({ onClose, isOpen });

  return (
    <Portal>
      <Box className={classNames(style.Modal, mods, [className])}>
        <Overlay onClick={close} />
        <Box className={style.content}>{children}</Box>
      </Box>
    </Portal>
  );
};
