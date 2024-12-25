import { memo } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Primary-button";

type TProps = {
  text: string;
  onClick?: VoidFunction;
};

export const PrimaryButton = memo(
  function PrimaryButton({ text, onClick }: TProps) {
    if (!text) return null;

    return <button className={cn(BLOCK_NAME)} onClick={onClick}>
      {text}
    </button>;
  },
);
