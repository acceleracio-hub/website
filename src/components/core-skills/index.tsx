import { memo } from "react";
import classnames from "classnames/bind";
import { Text } from "@ui-kit/index";
import styles from "./index.module.scss";
import { ListItem } from "./components/list-item";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Core-skills";

export const CoreSkills = memo(
  function CoreSkills() {
    return <section className={cn(BLOCK_NAME)}>
      <Text size='h2' text="Чему вы научитесь?" marginBottom="medium" />
      <ol className={cn(`${BLOCK_NAME}__list`)}>
        <ListItem text="Уверенно проходить начальные этапы общения с рекрутерами" />
        <ListItem text="Эффективно рассказывать о себе и представлять свои достижения" />
        <ListItem text="Структурировано отвечать на вопросы поведенческого интервью" />
        <ListItem text="Подчеркивать свои ключевые профессиональные навыки" />
        <ListItem text="Избегать типичных ошибок на интервью" />
        <ListItem text="Делать все это на английском без страха, расширив зону комфорта" />
      </ol>
    </section>;
  },
);
