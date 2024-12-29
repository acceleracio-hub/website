import { memo } from "react";
import { Text, Tile } from "@ui-kit/index";
import classnames from "classnames/bind";
import { TargetGroupInfo } from "./components/target-group-info";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-target-audience";

export const CourseTargetAudience = memo(function CourseTargetAudience() {
  return (
    <section className={cn(BLOCK_NAME)}>
      <Text size="h2" text="Кому подойдет курс?" marginBottom="medium" />
      <Tile>
        <ul className={cn(`${BLOCK_NAME}__list`)}>
          <li className={cn(`${BLOCK_NAME}__list-item`)}>
            <TargetGroupInfo
              title="IT-специалисты"
              text="Подходит для разработчиков, DevOps'ов, тестировщиков, аналитиков, продактов и&nbsp;других диджитал-специалистов"
            />
          </li>

          <li className={cn(`${BLOCK_NAME}__list-item`)}>
            <TargetGroupInfo
              title="Высококвалифицированные специалисты других профессий"
              text="Если вы стремитесь работать за границей или&nbsp;в&nbsp;международных компаниях"
            />
          </li>
        </ul>
      </Tile>
    </section>
  );
});
