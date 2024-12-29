import { memo } from "react";
import { Text } from "@ui-kit/index";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Lesson-header";

type TProps = {
  title: string;
  index: number;
  isActive: boolean;
  onClick: VoidFunction;
};

export const LessonHeader = memo(function LessonHeader({ title, index, isActive, onClick }: TProps) {
  return (
    <div
      className={cn(BLOCK_NAME, {
        [`${BLOCK_NAME}--active`]: isActive,
      })}
      onClick={onClick}
    >
      <Text
        size="h3"
        tagType="p"
        color={isActive ? "white" : "black"}
        text={`Занятие${String.fromCharCode(160)}${index + 1}`}
      />
      <span className={cn(`${BLOCK_NAME}__title`)}>
        <Text size="h4" tagType="span" color={isActive ? "white" : "black"} text={title} marginBottom="small" />
      </span>
    </div>
  );
});
