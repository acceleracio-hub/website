import { memo, RefObject } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import React from 'react';

const cn = classnames.bind(styles);

type TProps = {
  /** Цвет текста */
  color?: 'white' | 'black' | 'light-purple' | 'purple'; 
  /** Флаг сокращения текста с помощью многоточия */
  isEllipsis?: boolean;
  /** Флаг верхнего регистра */
  isUpperCase?: boolean;
  /** Стиль для свойства white-space */
  whiteSpace?: 'normal' | 'nowrap' | 'pre-wrap';
  /** Размер текста */
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  /** Тип HTML-тега */
  tagType?: keyof JSX.IntrinsicElements;
  /** Сам текст */
  text: string;
  /** Атрибут title для текста */
  title?: string;
  /** Ссылка на элемент */
  textRef?: RefObject<HTMLElement>;
  /** Стиль текста (например, зачеркнутый) */
  textDecoration?: 'none' | 'underline' | 'line-through';
};

const TextComponent: React.FC<TProps> = ({
  color = 'white',
  isEllipsis = false,
  isUpperCase = false,
  whiteSpace = 'normal',
  size = 'h4',
  tagType,
  text,
  title,
  textRef,
  textDecoration = 'none',
}) => {
  const className = cn('Text', {
    [`Text--${size}`]: size,
    [`Text--${color}`]: color,
    [`Text--white-space-${whiteSpace}`]: whiteSpace,
    'Text--uppercase': isUpperCase,
    'Text--ellipsis': isEllipsis,
    [`Text--textDecoration-${textDecoration}`]: textDecoration,
  });

  const tagTypeOnSize = tagType || size;

  return React.createElement(
    tagTypeOnSize, // динамически создаем элемент
    {
      ref: textRef,
      className,
      title,
    },
    text
  );
};

export const Text = memo(TextComponent);