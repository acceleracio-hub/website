import { memo } from "react";
import { SecondaryButton, LabelButton } from "@ui-kit/index";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-info-actions";

export const CourseInfoActions = memo(function CourseInfoActions() {
  return (
    <div className={cn(BLOCK_NAME)}>
      <LabelButton text="Старт потока" label="6&nbsp;октября" />
      <LabelButton text="Длительность" label="2&nbsp;месяца" />
      <SecondaryButton text="Онлайн" />
    </div>
  );
});
