// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8heT1pgrgbecLEwTnEku1h
// Component: rBWGC56joDqz

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

import MyNavBar from "../../MyNavBar"; // plasmic-import: QL_neZ3AzYAD/component
import Button from "../../Button"; // plasmic-import: r03QmiGjBhFj/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsokBisxNOk3Yo } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: OkBisxNOk3Yo/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 8heT1pgrgbecLEwTnEku1h/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: rBWGC56joDqz/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: haKLuWbvNTf0/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: oPxkYH2W_6f2/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  home?: Flex__<"div">;
  myNavBar?: Flex__<typeof MyNavBar>;
  header?: Flex__<"section">;
  freeBox?: Flex__<"div">;
  h1?: Flex__<"h1">;
  span?: Flex__<"span">;
  divider?: Flex__<"section">;
  aboutThisJournal?: Flex__<"section">;
  recentStories?: Flex__<"section">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsokBisxNOk3Yo()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicHomepage.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicHomepage.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicHomepage.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicHomepage.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicHomepage.pageMetadata.ogImageSrc}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"home"}
          data-plasmic-override={overrides.home}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.home
          )}
        >
          <MyNavBar
            data-plasmic-name={"myNavBar"}
            data-plasmic-override={overrides.myNavBar}
            className={classNames("__wab_instance", sty.myNavBar)}
          />

          <section
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <section className={classNames(projectcss.all, sty.section__jw2Er)}>
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"A "}</React.Fragment>
                    {
                      <span
                        data-plasmic-name={"span"}
                        data-plasmic-override={overrides.span}
                        className={classNames(
                          projectcss.all,
                          projectcss.span,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.span
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "transparent" }}
                          >
                            {"Dreamer's"}
                          </span>
                          <React.Fragment> </React.Fragment>
                        </React.Fragment>
                      </span>
                    }
                    <React.Fragment>{"Journal"}</React.Fragment>
                  </React.Fragment>
                </h1>
              </div>
              <Button
                className={classNames("__wab_instance", sty.button___666Ko)}
                link={"#about-this"}
                submitsForm={false}
                target={false}
              >
                {"Read More"}
              </Button>
            </section>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__afySi)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"30%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/teb_z_website/images/image.svg",
                fullWidth: 150,
                fullHeight: 150,
                aspectRatio: 1
              }}
            />
          </section>
          <section
            data-plasmic-name={"divider"}
            data-plasmic-override={overrides.divider}
            className={classNames(projectcss.all, sty.divider)}
            id={"about-this"}
          />

          <section
            data-plasmic-name={"aboutThisJournal"}
            data-plasmic-override={overrides.aboutThisJournal}
            className={classNames(projectcss.all, sty.aboutThisJournal)}
            id={``}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jPHn
              )}
              id={``}
            >
              {"About This Journal"}
            </div>
            <section className={classNames(projectcss.all, sty.section__wQfYy)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__tfgq4)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"30.96%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/teb_z_website/images/image2.svg",
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />

              <section
                className={classNames(projectcss.all, sty.section___2OWh)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jzJE
                  )}
                >
                  {
                    "This journal demonstrates a way of expression inspired by words. It aims to tell parts of my life along with other little stories which engage and let the readers identify and tackle different aspects of everyday life."
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button___3EvxT)}
                  link={`/about-me`}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__slhAl
                    )}
                  >
                    {"Meet the Author"}
                  </div>
                </Button>
              </section>
            </section>
          </section>
          <section
            data-plasmic-name={"recentStories"}
            data-plasmic-override={overrides.recentStories}
            className={classNames(projectcss.all, sty.recentStories)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lpOB
              )}
            >
              {"Recent Stories"}
            </div>
            <section className={classNames(projectcss.all, sty.section__h7TI)}>
              <CmsQueryRepeater
                data-plasmic-name={"cmsDataFetcher"}
                data-plasmic-override={overrides.cmsDataFetcher}
                className={classNames("__wab_instance", sty.cmsDataFetcher)}
                desc={false}
                emptyMessage={
                  <DataCtxReader__>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__km9Se
                        )}
                      >
                        {"No matching published entries found."}
                      </div>
                    )}
                  </DataCtxReader__>
                }
                forceEmptyState={false}
                forceLoadingState={false}
                limit={0}
                loadingMessage={
                  <DataCtxReader__>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mLeeQ
                        )}
                      >
                        {"Loading..."}
                      </div>
                    )}
                  </DataCtxReader__>
                }
                noAutoRepeat={true}
                noLayout={false}
                useDraft={false}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <React.Fragment>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jvsO
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return (
                                $ctx.plasmicCmsStoriesCollection[
                                  $state.sliderCarousel.currentSlide
                                ].data.title +
                                " - " +
                                $ctx.plasmicCmsStoriesCollection[0].data
                                  .category
                              );
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      {(() => {
                        const child$Props = {
                          arrows: true,
                          beforeChange:
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "currentSlide",
                              ["sliderCarousel", "currentSlide"],
                              SliderWrapper_Helpers
                            ),
                          centerMode: false,
                          centerPadding: "0",
                          className: classNames(
                            "__wab_instance",
                            sty.sliderCarousel
                          ),
                          dots: true,
                          infinite: true,
                          initialSlide: generateStateValueProp($state, [
                            "sliderCarousel",
                            "currentSlide"
                          ]),
                          ref: ref => {
                            $refs["sliderCarousel"] = ref;
                          },
                          rows: 1,
                          sliderScopeClassName: sty["sliderCarousel__slider"],
                          slidesPerRow: 1,
                          variableWidth: false,
                          vertical: false
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "currentSlide",
                              plasmicStateName: "sliderCarousel.currentSlide"
                            }
                          ],
                          [],
                          SliderWrapper_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <SliderWrapper
                            data-plasmic-name={"sliderCarousel"}
                            data-plasmic-override={overrides.sliderCarousel}
                            {...child$Props}
                          >
                            {(_par =>
                              !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                              [2, 3, 4]
                            ).map((__plasmic_item_0, __plasmic_idx_0) => {
                              const currentItem = __plasmic_item_0;
                              const currentIndex = __plasmic_idx_0;
                              return (
                                <PlasmicImg__
                                  alt={""}
                                  className={classNames(sty.img__xXjbG)}
                                  displayHeight={"300px"}
                                  displayMaxHeight={"none"}
                                  displayMaxWidth={"300px"}
                                  displayMinHeight={"0"}
                                  displayMinWidth={"0"}
                                  displayWidth={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobileOnly"
                                    )
                                      ? "164px"
                                      : "auto"
                                  }
                                  height={"100%"}
                                  key={currentIndex}
                                  onClick={async event => {
                                    const $steps = {};

                                    $steps["goToStory"] = true
                                      ? (() => {
                                          const actionArgs = {
                                            destination: `/stories/${(() => {
                                              try {
                                                return $ctx
                                                  .plasmicCmsStoriesCollection[
                                                  currentIndex
                                                ].data.title;
                                              } catch (e) {
                                                if (
                                                  e instanceof TypeError ||
                                                  e?.plasmicType ===
                                                    "PlasmicUndefinedDataError"
                                                ) {
                                                  return undefined;
                                                }
                                                throw e;
                                              }
                                            })()}`
                                          };
                                          return (({ destination }) => {
                                            if (
                                              typeof destination === "string" &&
                                              destination.startsWith("#")
                                            ) {
                                              document
                                                .getElementById(
                                                  destination.substr(1)
                                                )
                                                .scrollIntoView({
                                                  behavior: "smooth"
                                                });
                                            } else {
                                              __nextRouter?.push(destination);
                                            }
                                          })?.apply(null, [actionArgs]);
                                        })()
                                      : undefined;
                                    if (
                                      $steps["goToStory"] != null &&
                                      typeof $steps["goToStory"] === "object" &&
                                      typeof $steps["goToStory"].then ===
                                        "function"
                                    ) {
                                      $steps["goToStory"] = await $steps[
                                        "goToStory"
                                      ];
                                    }
                                  }}
                                  src={(() => {
                                    try {
                                      return $ctx.plasmicCmsStoriesCollection[
                                        currentIndex
                                      ].data.image.url;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "https://static1.plasmic.app/components/react-slick/slide1.png";
                                      }
                                      throw e;
                                    }
                                  })()}
                                  width={"200px"}
                                />
                              );
                            })}
                          </SliderWrapper>
                        );
                      })()}
                    </React.Fragment>
                  )}
                </DataCtxReader__>
              </CmsQueryRepeater>
            </section>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  home: [
    "home",
    "myNavBar",
    "header",
    "freeBox",
    "h1",
    "span",
    "divider",
    "aboutThisJournal",
    "recentStories",
    "cmsDataFetcher",
    "sliderCarousel"
  ],
  myNavBar: ["myNavBar"],
  header: ["header", "freeBox", "h1", "span"],
  freeBox: ["freeBox", "h1", "span"],
  h1: ["h1", "span"],
  span: ["span"],
  divider: ["divider"],
  aboutThisJournal: ["aboutThisJournal"],
  recentStories: ["recentStories", "cmsDataFetcher", "sliderCarousel"],
  cmsDataFetcher: ["cmsDataFetcher", "sliderCarousel"],
  sliderCarousel: ["sliderCarousel"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  home: "div";
  myNavBar: typeof MyNavBar;
  header: "section";
  freeBox: "div";
  h1: "h1";
  span: "span";
  divider: "section";
  aboutThisJournal: "section";
  recentStories: "section";
  cmsDataFetcher: typeof CmsQueryRepeater;
  sliderCarousel: typeof SliderWrapper;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "home") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("home"),
  {
    // Helper components rendering sub-elements
    myNavBar: makeNodeComponent("myNavBar"),
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    span: makeNodeComponent("span"),
    divider: makeNodeComponent("divider"),
    aboutThisJournal: makeNodeComponent("aboutThisJournal"),
    recentStories: makeNodeComponent("recentStories"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    sliderCarousel: makeNodeComponent("sliderCarousel"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "TebZ",
      description:
        "A blog where I post different stories, anecdotes and just about anything that comes to mind",
      ogImageSrc:
        "https://site-assets.plasmic.app/c4e996cbd2bf5a227c6da138871deddd.png",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */