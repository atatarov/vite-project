import React, { InputHTMLAttributes, memo } from 'react';

import style from './Input.module.scss';
import { classNames } from '../../../lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly,
    ...restProps
  }: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <input
        {...restProps}
        className={classNames(style.Input, {}, [className])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        readOnly={readonly}
      />
    );
  }
);
