import { memo } from "react";
import { Tile, Text } from "@ui-kit/index";
import classnames from "classnames/bind";
import it from "../../assets/it.png";
import { PrimaryBox } from "./components/primary-box";
import { SecondaryBox } from "./components/secondary-box";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-schedule";

export const CourseSchedule = memo(function CourseSchedule() {
  return (
    <>
      <Text size="h2" color="white" text="Организация курса" marginBottom="large" />
      <section>
        <Tile>
          <div className={cn(BLOCK_NAME)}>
            <div className={cn(`${BLOCK_NAME}__content`)}>
              <PrimaryBox>
                <Text size="h4" tagType="p" color="black" text="Каждую неделю в 19:00 по мск" textAlign="center" />
              </PrimaryBox>
              <div className={cn(`${BLOCK_NAME}__row`)}>
                <PrimaryBox>
                  <Text size="h4" tagType="p" color="black" text="7 занятий" textAlign="center" />
                </PrimaryBox>
                <PrimaryBox>
                  <Text size="h4" tagType="p" color="black" text="по 60 минут" textAlign="center" />
                </PrimaryBox>
              </div>
              <PrimaryBox>
                <Text size="h4" tagType="p" color="black" text="Занятия в группе 4-5 человек" textAlign="center" />
              </PrimaryBox>
              <SecondaryBox>
                <Text size="h4" tagType="p" color="white" text="Программа обучения на английском" textAlign="center" />
              </SecondaryBox>
            </div>

            <img className={cn(`${BLOCK_NAME}__image`)} alt="Газета" src={it} />
          </div>
        </Tile>
      </section>
    </>
  );
});
