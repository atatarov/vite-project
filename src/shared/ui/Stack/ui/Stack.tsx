import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import style from './Stack.module.scss';

export type Justify = 'start' | 'center' | 'end' | 'between';
export type Align = 'start' | 'center' | 'end';
export type Direction = 'row' | 'column';
export type Gap = '4' | '8' | '16' | '32';

const justifyClasses: Record<Justify, string> = {
  start: style.justifyStart,
  center: style.justifyCenter,
  end: style.justifyEnd,
  between: style.justifyBetween,
};

const alignClasses: Record<Align, string> = {
  start: style.alignStart,
  center: style.alignCenter,
  end: style.alignEnd,
};

const directionClasses: Record<Direction, string> = {
  row: style.directionRow,
  column: style.directionColumn,
};

const gapClasses: Record<Gap, string> = {
  4: style.gap4,
  8: style.gap8,
  16: style.gap16,
  32: style.gap32,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface StackProps extends DivProps {
  children: ReactNode;
  className?: string;
  justify?: Justify;
  align?: Align;
  direction?: Direction;
  gap?: Gap;
  max?: boolean;
}

export const Stack = ({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  max,
  ...restProps
}: StackProps) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [style.max]: max,
  };

  return (
    <div {...restProps} className={classNames(style.Stack, mods, classes)}>
      {children}
    </div>
  );
};
