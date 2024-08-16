import { memo } from 'react';
import './styles.scss';

export const Header = memo(
  function Header() {
    return (<header className="header">
      <div className="header-logo">Acceleracio ✨</div>
      <nav className="header-nav">
        <ul className="header-ul">
          <li><a className="header-link" href="#">О курсе</a></li>
          <li><a className="header-link" href="#">Преподаватели</a></li>
          <li><a className="header-link" href="#">Программа</a></li>
          <li><a className="header-link" href="#">О нас</a></li>
          <li><a className="header-link" href="#">Отзывы</a></li>
        </ul>
      </nav>
    </header>);
  },
);
