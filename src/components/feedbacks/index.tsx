import { memo } from "react";
import classnames from "classnames/bind";
import { Text, Tile } from "@ui-kit/index";
import userGirls from "./assets/use-avatar-girl.svg";
import styles from "./index.module.scss";
import { FeedbackItem } from "./components/feedback-item";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Feedbacks";

export const Feedbacks = memo(function Feedbacks() {
  return (
    <>
      <Text size="h2" color="white" text="Отзывы о нашем курсе" marginBottom="large" />
      <Tile>
        <div className={cn(BLOCK_NAME)}>
          <ul className={cn(`${BLOCK_NAME}__list`)}>
            <FeedbackItem image={userGirls} position="Executive Assistant" location="Silicon Valley, USA">
              <Text
                size="p"
                color="black"
                text="Привет, Аня! В прошлом месяце начала работать на калифорнийскую компанию."
                marginBottom="small"
              />
              <Text
                size="p"
                color="black"
                text="Отбор и компания супер, область ровно та что я хотела (хотя позиция не такая классная, как хотелось бы, но я решила что приемлемо, зато задачи интересные)."
                marginBottom="small"
              />
              <Text
                size="p"
                color="black"
                text="Помогло что был еще один expiring offer, так что я пропустила в итоге test day."
                marginBottom="small"
              />
            </FeedbackItem>
          </ul>
        </div>
      </Tile>
    </>
  );
});
