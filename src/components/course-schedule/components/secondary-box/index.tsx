import { memo, PropsWithChildren } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Secondary-box";

export const SecondaryBox = memo(function SecondaryBox({ children }: PropsWithChildren) {
  return <div className={cn(BLOCK_NAME)}>{children}</div>;
});
