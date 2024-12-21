import { memo } from "react";
import classnames from "classnames/bind";
import { Text } from "@ui-kit/index";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-structure";

export const CourseStructure = memo(
  function CourseStructure() {
    return <>
      <Text size='h2' color="white" text="Как устроено обучение?" marginBottom="large" />
      <section className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__cycle-container`)}>
          <div className={cn(`${BLOCK_NAME}__cycle-item-flex`)}>
            <div className={cn(`${BLOCK_NAME}__cycle-item-flex-container`)}>
              <Text size="h4" color="black" text="Перед занятием" marginBottom="medium" />
              <div className={cn(`${BLOCK_NAME}__cycle-item-container`)}>
                <div className={cn(`${BLOCK_NAME}__cycle-item`)}><Text size="p" color="white" text="Составляем ответы на вопросы интервью" marginBottom="small" /></div>
              </div>
            </div>
            <div className={cn(`${BLOCK_NAME}__cycle-arrow`)}>⮕</div>
          </div>

          <div className={cn(`${BLOCK_NAME}__cycle-item-flex`)}>

            <div className={cn(`${BLOCK_NAME}__cycle-item-flex-container`)}>
              <Text size="h4" color="black" text="На занятии" marginBottom="medium" />
              <div className={cn(`${BLOCK_NAME}__cycle-item-container`)}>
                <div className={cn(`${BLOCK_NAME}__cycle-item`)}><Text size="p" color="white" text="Разбираем теорию" marginBottom="small" /></div>
              </div>
            </div>
            <div className={cn(`${BLOCK_NAME}__cycle-arrow`)}>⮕</div>
          </div>

          <div className={cn(`${BLOCK_NAME}__cycle-item-flex-container`)}>

            <div className={cn(`${BLOCK_NAME}__cycle-item-flex-container`)}>
              <Text size="h4" color="black" text="Фидбек" marginBottom="medium" />
              <div className={cn(`${BLOCK_NAME}__cycle-item-container`)}>
                <div className={cn(`${BLOCK_NAME}__cycle-item`)}>
                  <Text size="p" color="white" text="Улучшаем и отрабатываем  ответ + фидбек" marginBottom="medium" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(`${BLOCK_NAME}__cycle-practice`)}><Text size="p" color="purple" text="100% языковой практики" marginBottom="none" /></div>
      </section>
    </>
      ;
  },
);
