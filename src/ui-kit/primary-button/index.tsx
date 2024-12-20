import { memo } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Primary-button";

type TProps = {
  text: string;
};

export const PrimaryButton = memo(
  function PrimaryButton({ text }: TProps) {
    if (!text) return null;

    return <button className={cn(BLOCK_NAME)}>
      {text}
    </button>;
  },
);
