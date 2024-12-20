import { memo } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { CourseInfoActions } from "./_components/course-info-actions";
import { CourseInfoBanner } from "./_components/course-info-banner";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-info";

export const CourseInfo = memo(
  function CourseInfo() {
    return (
      <section className={cn(BLOCK_NAME)}>
        <CourseInfoActions/>
        <CourseInfoBanner />
      </section>
    );
  },
);
