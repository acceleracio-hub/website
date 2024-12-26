import { memo } from "react";
import { PrimaryButton, Text } from "@ui-kit/index";
import main from "../../../../assets/main.png";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-info-banner";

export const CourseInfoBanner = memo(
  function CourseInfoBanner() {
    return (
      <div className={cn(`${BLOCK_NAME}__banner`)}>
        <div className={cn(`${BLOCK_NAME}__banner-text`)}>
          <Text size='h1' text="Подготовка к&nbsp;собеседованию на&nbsp;английском" />
          <Text size='p' text="Станьте самым желанным кандидатом на&nbsp;собеседованиях в компаниях Европы и&nbsp;Америки  — от&nbsp;самопрезентации до оффера." />
          <PrimaryButton text="Записаться на курс" />
        </div>

        <img className={cn(`${BLOCK_NAME}__banner-image`)} alt="Газета" src={main} />
      </div>
    );
  },
);
