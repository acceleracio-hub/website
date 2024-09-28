import { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Secondary-button';

type TProps = {
  text: string;
};

export const SecondaryButton = memo(
  function SecondaryButton({ text }: TProps) {
    if (!text) return null;

    return <button className={cn(BLOCK_NAME)}>
      {text}
    </button>;
  },
);

