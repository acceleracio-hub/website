import { memo, PropsWithChildren } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Tile";

export const Tile = memo(
  function Tile({ children }: PropsWithChildren) {
    return <div className={cn(BLOCK_NAME)}>{children}</div>;
  },
);
