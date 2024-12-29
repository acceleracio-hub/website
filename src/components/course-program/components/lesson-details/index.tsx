import { memo } from "react";
import classnames from "classnames/bind";
import { Text } from "@ui-kit/index";
import { TDetails } from "../../types";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Lesson-details";

type TProps = {
  details: TDetails;
};

export const LessonDetails = memo(function LessonDetails({ details: { whatLearn, extraNote } }: TProps) {
  return (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__section`)}>
        <Text size="h3" tagType="h3" color="black" text="Что будет?" marginBottom="small" />
        <ul className={cn(`${BLOCK_NAME}__list`)}>
          {whatLearn.map((item, index) => (
            <li className={cn(`${BLOCK_NAME}__list-item`)} key={index}>
              <Text size="h4" tagType="span" color="black" text={item} marginBottom="small" />
            </li>
          ))}
        </ul>
      </div>
      {extraNote && (
        <div className={cn(`${BLOCK_NAME}__extra-note`)}>
          <Text size="h5" tagType="span" color="black" text={extraNote} marginBottom="small" />
        </div>
      )}
    </div>
  );
});
