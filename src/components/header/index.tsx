import { memo } from "react";
import { BrowserLink } from "@ui-kit/index";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { NAVIGATION_LINKS } from "../../constants/navigation-links";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Header";

export const Header = memo(
  function Header() {
    return (
      <header className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__content`)}>
          <div className={cn(`${BLOCK_NAME}__logo`)}>Acceleracio ✨</div>
          <nav className={cn(`${BLOCK_NAME}__nav`)}>
            <ul className={cn(`${BLOCK_NAME}__ul`)}>
              <li>
                <BrowserLink routeName={NAVIGATION_LINKS.ABOUT_COURSE} text="О курсе" />
              </li>
              <li>
                <BrowserLink routeName={NAVIGATION_LINKS.TEACHERS} text="Преподаватели" />
              </li>
              <li>
                <BrowserLink routeName={NAVIGATION_LINKS.PROGRAM} text="Программа" />
              </li>
              <li>
                <BrowserLink routeName={NAVIGATION_LINKS.ABOUT_US} text="О нас" />
              </li>
              <li>
                <BrowserLink routeName={NAVIGATION_LINKS.REVIEWS} text="Отзывы" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  },
);
