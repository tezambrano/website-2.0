import * as React from "react";
import {
  PlasmicNavBarButton,
  DefaultNavBarButtonProps
} from "./plasmic/teb_z_website/PlasmicNavBarButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface NavBarButtonProps extends DefaultNavBarButtonProps {
  // Feel free to add any additional props that this component should receive
}
function NavBarButton_(props: NavBarButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicNavBarButton.useBehavior<NavBarButtonProps>(
    props,
    ref
  );
  return <PlasmicNavBarButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<NavBarButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<NavBarButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const NavBarButton = React.forwardRef(
  NavBarButton_
) as any as ButtonComponentType;

export default Object.assign(NavBarButton, { __plumeType: "button" });
