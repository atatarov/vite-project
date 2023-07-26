import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode | null;
  element?: HTMLElement;
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
  const ref = useRef<HTMLElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = element || null;
    setMounted(true);
  }, [element]);

  return children && mounted && ref.current
    ? createPortal(children, ref.current)
    : null;
};
