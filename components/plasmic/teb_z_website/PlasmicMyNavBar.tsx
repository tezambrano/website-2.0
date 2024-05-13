// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8heT1pgrgbecLEwTnEku1h
// Component: QL_neZ3AzYAD

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import NavBarButton from "../../NavBarButton"; // plasmic-import: UTuSD5QWAwAX/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 8heT1pgrgbecLEwTnEku1h/projectcss
import sty from "./PlasmicMyNavBar.module.css"; // plasmic-import: QL_neZ3AzYAD/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: haKLuWbvNTf0/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: oPxkYH2W_6f2/icon

createPlasmicElementProxy;

export type PlasmicMyNavBar__VariantMembers = {};
export type PlasmicMyNavBar__VariantsArgs = {};
type VariantPropType = keyof PlasmicMyNavBar__VariantsArgs;
export const PlasmicMyNavBar__VariantProps = new Array<VariantPropType>();

export type PlasmicMyNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicMyNavBar__ArgsType;
export const PlasmicMyNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicMyNavBar__OverridesType = {
  root?: Flex__<typeof NavigationBar>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  svg?: Flex__<"svg">;
};

export interface DefaultMyNavBarProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMyNavBar__RenderFunc(props: {
  variants: PlasmicMyNavBar__VariantsArgs;
  args: PlasmicMyNavBar__ArgsType;
  overrides: PlasmicMyNavBar__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <PlasmicLink__
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__adTuU)}
            displayHeight={"35px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={{
              src: "/plasmic/teb_z_website/images/tebZLogo1Png.png",
              fullWidth: 96,
              fullHeight: 96,
              aspectRatio: undefined
            }}
          />
        </PlasmicLink__>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__c6Pl)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <NavBarButton
            className={classNames("__wab_instance", sty.navBarButton__oofh3)}
            link={`/about-me`}
            onClick={async event => {
              const $steps = {};

              $steps["goToAboutMe"] = true
                ? (() => {
                    const actionArgs = { destination: `/about-me` };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToAboutMe"] != null &&
                typeof $steps["goToAboutMe"] === "object" &&
                typeof $steps["goToAboutMe"].then === "function"
              ) {
                $steps["goToAboutMe"] = await $steps["goToAboutMe"];
              }
            }}
            startIcon={
              <ChecksvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            }
          >
            {"About Me"}
          </NavBarButton>
          <NavBarButton
            className={classNames("__wab_instance", sty.navBarButton___6Sl2C)}
            link={`/stories`}
          >
            {"Stories"}
          </NavBarButton>
          <NavBarButton
            className={classNames("__wab_instance", sty.navBarButton__tuJer)}
            link={`/contact-me`}
          >
            {"Get in Touch"}
          </NavBarButton>
        </React.Fragment>
      }
      openButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__jsSyj)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "svg"],
  link: ["link"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
  link: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMyNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMyNavBar__VariantsArgs;
    args?: PlasmicMyNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMyNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMyNavBar__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMyNavBar__ArgProps,
          internalVariantPropNames: PlasmicMyNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMyNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMyNavBar";
  } else {
    func.displayName = `PlasmicMyNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicMyNavBar = Object.assign(
  // Top-level PlasmicMyNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicMyNavBar
    internalVariantProps: PlasmicMyNavBar__VariantProps,
    internalArgProps: PlasmicMyNavBar__ArgProps
  }
);

export default PlasmicMyNavBar;
/* prettier-ignore-end */