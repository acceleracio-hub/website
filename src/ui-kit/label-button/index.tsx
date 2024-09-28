import { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Label-button';

type TProps = {
  text: string;
  label: string;
};

export const LabelButton = memo(
  function LabelButton({ text, label }: TProps) {
    if (!text || !label) return null;
    
    return <button className={cn(BLOCK_NAME)}>
      {text}
      {' '}
      <span className={cn(`${BLOCK_NAME}__label`)}>{label}</span>
    </button>;
  },
);
