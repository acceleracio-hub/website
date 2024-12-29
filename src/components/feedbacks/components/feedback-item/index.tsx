import { memo, PropsWithChildren } from "react";
import classnames from "classnames/bind";
import { Text } from "@ui-kit/index";
import styles from "./index.module.scss";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Feedback-item";

type TProps = {
  /** Изображение пользователя */
  image: string;
  /** Позиция пользователя */
  position: string;
  /** Локация пользователя */
  location: string;
} & PropsWithChildren;

export const FeedbackItem = memo(function FeedbackItem({ image, position, location, children }: TProps) {
  return (
    <li className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__info`)}>
        <img className={cn(`${BLOCK_NAME}__image`)} alt={position} src={image} />
        <div className={cn(`${BLOCK_NAME}__name`)}>
          <Text size="h5" tagType="p" color="black" text={position} marginBottom="none" />
          <Text size="h6" tagType="p" color="black" text={location} marginBottom="none" />
        </div>
      </div>
      <blockquote className={cn(`${BLOCK_NAME}__description`)}>{children}</blockquote>
    </li>
  );
});
