import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export const Button = memo(
  ({ className, children, ...restProps }: ButtonProps) => {
    return (
      <button
        {...restProps}
        type="button"
        className={classNames(style.Button, {}, [className])}
      >
        {children}
      </button>
    );
  }
);
