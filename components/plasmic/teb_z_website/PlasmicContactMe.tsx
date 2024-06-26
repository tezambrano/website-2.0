// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8heT1pgrgbecLEwTnEku1h
// Component: cwovqMgOcsGF

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import MyNavBar from "../../MyNavBar"; // plasmic-import: QL_neZ3AzYAD/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { Popover } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: r03QmiGjBhFj/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 8heT1pgrgbecLEwTnEku1h/projectcss
import sty from "./PlasmicContactMe.module.css"; // plasmic-import: cwovqMgOcsGF/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: haKLuWbvNTf0/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: oPxkYH2W_6f2/icon

createPlasmicElementProxy;

export type PlasmicContactMe__VariantMembers = {};
export type PlasmicContactMe__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactMe__VariantsArgs;
export const PlasmicContactMe__VariantProps = new Array<VariantPropType>();

export type PlasmicContactMe__ArgsType = {};
type ArgPropType = keyof PlasmicContactMe__ArgsType;
export const PlasmicContactMe__ArgProps = new Array<ArgPropType>();

export type PlasmicContactMe__OverridesType = {
  root?: Flex__<"div">;
  myNavBar?: Flex__<typeof MyNavBar>;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  textArea?: Flex__<typeof AntdTextArea>;
  popoverCore?: Flex__<typeof Popover>;
  button?: Flex__<typeof Button>;
  freeBox?: Flex__<"div">;
};

export interface DefaultContactMeProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactMe__RenderFunc(props: {
  variants: PlasmicContactMe__VariantsArgs;
  args: PlasmicContactMe__ArgsType;
  overrides: PlasmicContactMe__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "textArea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdTextArea_Helpers)
      },
      {
        path: "popoverCore.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <MyNavBar
            data-plasmic-name={"myNavBar"}
            data-plasmic-override={overrides.myNavBar}
            className={classNames("__wab_instance", sty.myNavBar)}
          />

          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.form),
              extendedOnValuesChange:
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "value",
                  ["form", "value"],
                  FormWrapper_Helpers
                ),
              formItems: [
                { label: "Name", name: "name", inputType: "Text" },
                { label: "Message", name: "message", inputType: "Text Area" }
              ],
              labelCol: { span: 8, horizontalOnly: true },
              layout: "vertical",
              mode: "advanced",
              onFinish: async values => {
                const $steps = {};

                $steps["updatePopoverCoreOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["popoverCore", "open"]
                        },
                        operation: 0,
                        value: true
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updatePopoverCoreOpen"] != null &&
                  typeof $steps["updatePopoverCoreOpen"] === "object" &&
                  typeof $steps["updatePopoverCoreOpen"].then === "function"
                ) {
                  $steps["updatePopoverCoreOpen"] = await $steps[
                    "updatePopoverCoreOpen"
                  ];
                }

                $steps["zapierTrigger"] = true
                  ? (() => {
                      const actionArgs = {
                        dataOp: {
                          sourceId: "tfyic8b7TBtyBVJMoyL26j",
                          opId: "a8194d2a-3b0b-40de-bc22-07350dc0ef2a",
                          userArgs: {
                            body: [$state.form.value]
                          },
                          cacheKey: null,
                          invalidatedKeys: ["plasmic_refresh_all"],
                          roleId: null
                        }
                      };
                      return (async ({ dataOp, continueOnError }) => {
                        try {
                          const response = await executePlasmicDataOp(dataOp, {
                            userAuthToken: dataSourcesCtx?.userAuthToken,
                            user: dataSourcesCtx?.user
                          });
                          await plasmicInvalidate(dataOp.invalidatedKeys);
                          return response;
                        } catch (e) {
                          if (!continueOnError) {
                            throw e;
                          }
                          return e;
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["zapierTrigger"] != null &&
                  typeof $steps["zapierTrigger"] === "object" &&
                  typeof $steps["zapierTrigger"].then === "function"
                ) {
                  $steps["zapierTrigger"] = await $steps["zapierTrigger"];
                }
              },
              onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
                $state,
                "isSubmitting",
                ["form", "isSubmitting"],
                FormWrapper_Helpers
              ),
              ref: ref => {
                $refs["form"] = ref;
              },
              submitSlot: null,
              wrapperCol: { span: 16, horizontalOnly: true }
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "form.value"
                },
                {
                  name: "isSubmitting",
                  plasmicStateName: "form.isSubmitting"
                }
              ],
              [],
              FormWrapper_Helpers ?? {},
              child$Props
            );

            return (
              <FormWrapper
                data-plasmic-name={"form"}
                data-plasmic-override={overrides.form}
                {...child$Props}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4K5M0
                  )}
                >
                  {"Wanna contact me? Fill out this form"}
                </div>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__idTdn)}
                  label={"Email"}
                  name={"email"}
                  rules={[{ ruleType: "required" }]}
                >
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.input),
                      onChange: generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["input", "value"],
                        AntdInput_Helpers
                      ),
                      value: generateStateValueProp($state, ["input", "value"])
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "input.value"
                        }
                      ],
                      [],
                      AntdInput_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <AntdInput
                        data-plasmic-name={"input"}
                        data-plasmic-override={overrides.input}
                        {...child$Props}
                      />
                    );
                  })()}
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__dp2S4)}
                  label={"Message"}
                  name={"message"}
                  rules={[{ ruleType: "required" }]}
                >
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.textArea),
                      onChange: generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["textArea", "value"],
                        AntdTextArea_Helpers
                      ),
                      value: generateStateValueProp($state, [
                        "textArea",
                        "value"
                      ])
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "textArea.value"
                        }
                      ],
                      [],
                      AntdTextArea_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <AntdTextArea
                        data-plasmic-name={"textArea"}
                        data-plasmic-override={overrides.textArea}
                        {...child$Props}
                      />
                    );
                  })()}
                </FormItemWrapper>
                <Popover
                  data-plasmic-name={"popoverCore"}
                  data-plasmic-override={overrides.popoverCore}
                  className={classNames("__wab_instance", sty.popoverCore)}
                  defaultOpen={false}
                  modal={false}
                  onOpenChange={generateStateOnChangeProp($state, [
                    "popoverCore",
                    "open"
                  ])}
                  open={generateStateValueProp($state, ["popoverCore", "open"])}
                  overlay={
                    <div
                      data-plasmic-name={"freeBox"}
                      data-plasmic-override={overrides.freeBox}
                      className={classNames(projectcss.all, sty.freeBox)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__xPyLf
                        )}
                      >
                        {"Form sent!"}
                      </div>
                    </div>
                  }
                  side={"top"}
                  themeResetClass={classNames(
                    projectcss.root_reset,
                    projectcss.plasmic_default_styles,
                    projectcss.plasmic_mixins,
                    projectcss.plasmic_tokens,
                    plasmic_antd_5_hostless_css.plasmic_tokens
                  )}
                  trigger={false}
                >
                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    submitsForm={true}
                  >
                    {"Send"}
                  </Button>
                </Popover>
              </FormWrapper>
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "myNavBar",
    "form",
    "input",
    "textArea",
    "popoverCore",
    "button",
    "freeBox"
  ],
  myNavBar: ["myNavBar"],
  form: ["form", "input", "textArea", "popoverCore", "button", "freeBox"],
  input: ["input"],
  textArea: ["textArea"],
  popoverCore: ["popoverCore", "button", "freeBox"],
  button: ["button"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  myNavBar: typeof MyNavBar;
  form: typeof FormWrapper;
  input: typeof AntdInput;
  textArea: typeof AntdTextArea;
  popoverCore: typeof Popover;
  button: typeof Button;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactMe__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactMe__VariantsArgs;
    args?: PlasmicContactMe__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactMe__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContactMe__ArgsType,
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
          internalArgPropNames: PlasmicContactMe__ArgProps,
          internalVariantPropNames: PlasmicContactMe__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactMe__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactMe";
  } else {
    func.displayName = `PlasmicContactMe.${nodeName}`;
  }
  return func;
}

export const PlasmicContactMe = Object.assign(
  // Top-level PlasmicContactMe renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    myNavBar: makeNodeComponent("myNavBar"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    textArea: makeNodeComponent("textArea"),
    popoverCore: makeNodeComponent("popoverCore"),
    button: makeNodeComponent("button"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicContactMe
    internalVariantProps: PlasmicContactMe__VariantProps,
    internalArgProps: PlasmicContactMe__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContactMe;
/* prettier-ignore-end */
