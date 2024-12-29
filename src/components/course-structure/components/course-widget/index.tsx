import { memo } from "react";
import classnames from "classnames/bind";
import { Tile, Text } from "@ui-kit/index";
import styles from "./index.module.scss";
import { useDocumentBreakpoints } from "@hooks/use-document-breakpoints";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Course-widget";

type TProps = {
  titleImg: string;
  titleAlt: string;
  header: string;
  texts: Array<string>;
  direction?: "left" | "right";
};

export const CourseWidget = memo(function CourseWidget({
  titleImg,
  titleAlt,
  header,
  texts,
  direction = "left",
}: TProps) {
  const { isDesktop } = useDocumentBreakpoints();
  const isLeft = direction === "left" || !isDesktop;

  return (
    <Tile>
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__content`)}>
          <div className={cn(`${BLOCK_NAME}__description`)}>
            {isLeft && <img className={cn(`${BLOCK_NAME}__title`)} alt={titleAlt} src={titleImg} />}
            <div className={cn(`${BLOCK_NAME}__list`)}>
              <Text size="h3" color="black" text={header} marginBottom="medium" />
              {texts.map((text, index) => (
                <Text key={index} size="p" color="black" text={text} marginBottom="small" />
              ))}
            </div>
            {!isLeft && <img className={cn(`${BLOCK_NAME}__title`)} alt={titleAlt} src={titleImg} />}
          </div>
        </div>
      </div>
    </Tile>
  );
});
