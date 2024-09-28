import { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Browser-link';

type TProps = {
  /** урл */
  routeName: string;
  /** текст ссылки */
  text: string;
};

export const BrowserLink = memo(
  function BrowserLink({ routeName, text }: TProps) {
    return <a className={cn(BLOCK_NAME)} href={routeName}>{text}</a>;
  },
);
