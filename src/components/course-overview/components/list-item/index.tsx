import { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '../../../../ui-kit/text';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'List-item';

type TProps = {
  text: string;
};

export const ListItem = memo(
  function ListItem({ text }: TProps) {
    return <li className={cn(BLOCK_NAME)}>
      <Text size='h4' tagType="p" text={text} />
    </li>;
  },
);
