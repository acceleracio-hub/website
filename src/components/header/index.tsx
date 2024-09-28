import { memo } from 'react';
import { BrowserLink } from '../../ui-kit/browser-link';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Header';

export const Header = memo(
  function Header() {
    return (<header className={cn(BLOCK_NAME)} >
      <div className={cn(`${BLOCK_NAME}__logo`)}>Acceleracio ✨</div>
      <nav className={cn(`${BLOCK_NAME}__nav`)}>
        <ul className={cn(`${BLOCK_NAME}__ul`)}>
          <li>
            <BrowserLink routeName="#" text="О курсе" />
          </li>
          <li>
            <BrowserLink routeName="#" text="Преподаватели" />
          </li>
          <li>
            <BrowserLink routeName="#" text="Программа" />
          </li>
          <li>
            <BrowserLink routeName="#" text="О нас" />
          </li>
          <li>
            <BrowserLink routeName="#" text="Отзывы" />
          </li>
        </ul>
      </nav>
    </header>);
  },
);
