import { memo } from "react";
import { SecondaryButton, LabelButton, PrimaryButton, Text } from "@ui-kit/index";
import classnames from "classnames/bind";
import main from "../../assets/main.png";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-info";

export const CourseInfo = memo(
  function CourseInfo() {
    return (
      <section className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__wrapper`)}>
          <LabelButton text="Старт потока" label="6&nbsp;октября" />
          <LabelButton text="Длительность" label="2&nbsp;месяца" />
          <SecondaryButton text="Онлайн" />
        </div>
        <div className={cn(`${BLOCK_NAME}__banner`)}>
          <div className={cn(`${BLOCK_NAME}__banner-text`)}>
            <Text size='h1' text="Подготовка к&nbsp;собеседованию на&nbsp;английском" />
            <Text size='p' text="Станьте самым желанным кандидатом на&nbsp;собеседованиях в компаниях Европы и&nbsp;Америки  — от&nbsp;самопрезентации до оффера." />
            <PrimaryButton text="Записаться на курс" />
          </div>

          <img className={cn(`${BLOCK_NAME}__banner-img`)} alt="Газета" src={main} />
        </div>
      </section>
    );
  },
);
