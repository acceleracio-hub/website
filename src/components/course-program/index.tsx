import { memo, useState } from "react";
import { Text, Tile } from "@ui-kit/index";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { LESSONS } from "./constants";
import { LessonHeader } from "./components/lesson-header";
import { LessonDetails } from "./components/lesson-details";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-program";

export const CourseProgram = memo(function CourseProgram() {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  const handleToggleLesson = (index: number) => {
    setActiveLesson(activeLesson === index ? null : index);
  };

  return (
    <>
      <Text size="h2" color="white" text="Программа обучения" marginBottom="large" />
      <Tile>
        <div className={cn(BLOCK_NAME)}>
          {LESSONS.map(({ details, title }, index) => (
            <div key={index} className={cn(`${BLOCK_NAME}__lesson`)}>
              <LessonHeader
                title={title}
                index={index}
                isActive={activeLesson === index}
                onClick={() => handleToggleLesson(index)}
              />
              {activeLesson === index && <LessonDetails details={details} />}
            </div>
          ))}
        </div>
      </Tile>
    </>
  );
});
