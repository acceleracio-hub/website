import { memo } from "react";
import { Text } from "@ui-kit/index";
import classnames from "classnames/bind";
import { ListItem } from "./components/list-item";
import styles from "./index.module.scss";
import { NAVIGATION_LINKS } from "../../constants/navigation-links";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-overview";

export const CourseOverview = memo(
  function CourseOverview() {
    return (<section className={cn(BLOCK_NAME)} id={NAVIGATION_LINKS.ABOUT_COURSE}>
      <Text size='h2' color="black" text="Главное о&nbsp;курсе" marginBottom="medium" />
      <div className={cn(`${BLOCK_NAME}__wrapper`)}>
        <ul className={cn(`${BLOCK_NAME}__list`)}>
          <ListItem text="💣 7 live-занятий: отработай все ответы в контакте с преподавателем и участниками группы" />
          <ListItem text="🏴 Программа на английском: все материалы и занятия позволяют практиковаться на языке интервью" />
          <ListItem text="♦️ Мок-интервью: персональное тестирование навыков коммуникации с подробным фидбеком" />
          <ListItem text="🗨️ Видео-домашки: работа с интонацией, самопрезентацией и уверенностью подачи" />
          <ListItem text="⚫ CV + Cover Letter: база для качественных и быстрых откликов" />
          <ListItem text="▶️ Подбор стратегии поиска работы: эффективная воронка найма, которая не подведет" />
        </ul>
      </div>
    </section>);
  },
);
