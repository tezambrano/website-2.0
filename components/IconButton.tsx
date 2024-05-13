import * as React from "react";
import {
  PlasmicIconButton,
  DefaultIconButtonProps
} from "./plasmic/teb_z_website/PlasmicIconButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface IconButtonProps extends DefaultIconButtonProps {
  // Feel free to add any additional props that this component should receive
}
function IconButton_(props: IconButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicIconButton.useBehavior<IconButtonProps>(
    props,
    ref
  );
  return <PlasmicIconButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<IconButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<IconButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const IconButton = React.forwardRef(IconButton_) as any as ButtonComponentType;

export default Object.assign(IconButton, { __plumeType: "button" });
