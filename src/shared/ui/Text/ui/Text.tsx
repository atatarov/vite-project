import React, { createElement, memo, useMemo } from 'react';

import style from './Text.module.scss';
import { classNames } from '../../../lib/classNames/classNames';

type TextAlign = 'right' | 'left' | 'center';
type TypographyVariantTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'a'
  | 'span'
  | 'body';

interface TextProps {
  className?: string;
  text?: string;
  align?: TextAlign;
  highlightText?: string;
  highlightColor?: string;
  variant?: TypographyVariantTypes;
}

export const Text = memo(
  ({
    className,
    text = '',
    align = 'left',
    highlightText,
    highlightColor,
    variant = 'body',
  }: TextProps) => {
    const renderVariant = useMemo(() => {
      switch (variant) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'a':
        case 'span':
          return variant;
        case 'body':
        default:
          return 'p';
      }
    }, [variant]);

    const mods = {
      [style[align]]: true,
    };

    const memoizedHighlightedText = React.useMemo(() => {
      if (!highlightText || highlightText === '') {
        return text;
      }

      const regex = new RegExp(`(${highlightText})`, 'gi');
      const parts = text.split(regex);
      const highlightedText = parts.map((part, index) => {
        return regex.test(part) ? (
          <mark
            key={`${part}${index}`}
            style={{ backgroundColor: highlightColor, color: 'inherit' }}
          >
            {part}
          </mark>
        ) : (
          part
        );
      });

      return highlightedText;
    }, [text, highlightText, highlightColor]);

    return createElement(
      renderVariant,
      {
        className: classNames(style.Text, mods, [className]),
        'aria-describedby': 'aria-describedby',
      },
      <>{memoizedHighlightedText}</>
    );
  }
);
