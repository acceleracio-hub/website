import { memo } from "react";
import { Link } from "react-scroll";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Browser-link";

type TProps = {
  /** урл */
  routeName: string;
  /** текст ссылки */
  text: string;
};

export const BrowserLink = memo(
  function BrowserLink({ routeName, text }: TProps) {
    return <div className={cn(BLOCK_NAME)}>
      <Link to={routeName} offset={-130} smooth={true} duration={500}>{text}</Link>
    </div>;
  },
);
