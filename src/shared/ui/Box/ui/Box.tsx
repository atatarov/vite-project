import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface BoxProps extends DivProps {
  children: ReactNode;
  className?: string;
}

export const Box = ({ className, children, ...restProps }: BoxProps) => {
  const classes = [className];

  return (
    <div {...restProps} className={classNames('', {}, classes)}>
      {children}
    </div>
  );
};
