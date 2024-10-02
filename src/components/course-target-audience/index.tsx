import { memo } from "react";
import { Text } from "@ui-kit/index";
import classnames from "classnames/bind";
import all from "../../assets/all.png";
import it from "../../assets/it.png";
import { TargetGroupInfo } from "./components/target-group-info";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-target-audience";

export const CourseTargetAudience = memo(
  function CourseTargetAudience() {
    return <section className={cn(BLOCK_NAME)}>
      <Text size='h2' text="Для кого этот курс?" marginBottom="medium" />
      <ul className={cn(`${BLOCK_NAME}__list`)}>
        <li className={cn(`${BLOCK_NAME}__list-item`)}>
          <TargetGroupInfo
            src={it}
            title="IT-специалисты"
            text="Подходит для разработчиков, DevOps'ов, тестировщиков, аналитиков, продактов или кто-то ещё из&nbsp;мира технологий" />
        </li>

        <li className={cn(`${BLOCK_NAME}__list-item`)}>
          <TargetGroupInfo
            src={all}
            title="Высококвалифицированные специалисты других профессий"
            text="Если вы стремитесь работать за границей или в&nbsp;международных компаниях" />
        </li>
      </ul>
    </section>;
  },
);
