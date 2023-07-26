import { ReactNode, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import style from './Page.module.scss';

interface PageProps {
  children: ReactNode;
  className?: string;
}

export const Page = memo(({ className, children }: PageProps) => {
  return (
    <main className={classNames(style.Page, {}, [className])}>{children}</main>
  );
});
