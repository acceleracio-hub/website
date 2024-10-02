import { memo } from "react";
import { Text } from "@ui-kit/index";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "List-item";

type TProps = {
  text: string;
};

export const ListItem = memo(
  function ListItem({ text }: TProps) {
    return <li className={cn(BLOCK_NAME)}>
      <Text size='h4' color="black" tagType="p" text={text} />
    </li>;
  },
);
