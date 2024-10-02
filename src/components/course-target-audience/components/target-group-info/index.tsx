import { memo } from "react";
import { Text } from "@ui-kit/index";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Target-group-info";

type TProps = {
  title: string;
  text: string;
  src: string;
};

export const TargetGroupInfo = memo(
  function TargetGroupInfo({ title, text, src }: TProps) {
    return <>
      <img className={cn(`${BLOCK_NAME}__img`)} alt={title} src={src} />
      <div className={cn(BLOCK_NAME)}>
        <Text size='h4' text={title} marginBottom="medium" />
        <Text size="p" text={text} />
      </div>
    </>
    ;
  },
);
