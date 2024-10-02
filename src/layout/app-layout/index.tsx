import { memo } from "react";
import classnames from "classnames/bind";
import { Header } from "../../components/header";
import { CourseInfo } from "../../components/course-info";
import { CourseOverview } from "../../components/course-overview";
import { CourseTargetAudience } from "../../components/course-target-audience";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "App-layout";

export const AppLayout = memo(
  function AppLayout() {
    return <div className={cn(BLOCK_NAME)}>
      <Header />
      <CourseInfo />
      <CourseOverview />
      <CourseTargetAudience/>
    </div>;
  },
);
