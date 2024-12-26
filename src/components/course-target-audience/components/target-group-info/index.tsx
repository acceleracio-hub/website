import { memo } from "react";
import { Text } from "@ui-kit/index";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { useDocumentBreakpoints } from "@hooks/use-document-breakpoints";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Target-group-info";

type TProps = {
  title: string;
  text: string;
};

export const TargetGroupInfo = memo(
  function TargetGroupInfo({ title, text }: TProps) {
    const { isDesktop } = useDocumentBreakpoints();

    return <>
      <div className={cn(BLOCK_NAME)}>
        <Text size='h3' text={title} marginBottom="medium" color="black" wordBreak={isDesktop ? "normal" : "break-word"}/>
        <Text size="p" text={text} color="black" />
      </div>
    </>
    ;
  },
);
