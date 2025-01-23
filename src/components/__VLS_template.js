import { cartStore } from "@/store/store.js";
import LangSwitcher from "@/components/LangSwitcher.vue";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, __VLS_slots } from "./Header.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'search-result'?: boolean; } &
{ 'search-result'?: boolean; } &
{ 'search-result'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'LangSwitcher', typeof __VLS_localComponents, "LangSwitcher", "LangSwitcher", "LangSwitcher">;
__VLS_intrinsicElements.header; __VLS_intrinsicElements.header;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_components.LangSwitcher;
// @ts-ignore
[LangSwitcher,];
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
__VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul;
__VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg;
__VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.g; __VLS_intrinsicElements.g; __VLS_intrinsicElements.g; __VLS_intrinsicElements.g;
{
const __VLS_0 = __VLS_intrinsicElements["header"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("uppercase max-sm:px-4 max-lg:px-10 px-40 flex flex-wrap text-nowrap justify-between items-center h-8"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("uppercase max-sm:px-4 max-lg:px-10 px-40 flex flex-wrap text-nowrap justify-between items-center h-8"), style: ({}), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("text-l max-sm:text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("text-l max-sm:text-sm"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["h3"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_18.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("flex gap-5 text-l max-sm:text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("flex gap-5 text-l max-sm:text-sm"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["a"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, class: ("self-end uppercase text-l max-sm:text-sm max-sm:hidden"), href: ("/#/login"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("self-end uppercase text-l max-sm:text-sm max-sm:hidden"), href: ("/#/login"), style: ({}), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(
__VLS_ctx.getUsername
);
(__VLS_33.slots!).default;
}
(__VLS_28.slots!).default;
}
{
const __VLS_35 = ({} as 'LangSwitcher' extends keyof typeof __VLS_ctx ? { 'LangSwitcher': typeof __VLS_ctx.LangSwitcher; } : typeof __VLS_resolvedLocalAndGlobalComponents).LangSwitcher;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, }));
({} as { LangSwitcher: typeof __VLS_35; }).LangSwitcher;
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
(__VLS_23.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_40 = __VLS_intrinsicElements["div"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, class: ("h-10 max-lg:px-5 flex items-center px-40 justify-between xl:flex max-sm:hidden"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("h-10 max-lg:px-5 flex items-center px-40 justify-between xl:flex max-sm:hidden"), style: ({}), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = __VLS_intrinsicElements["div"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
const __VLS_50 = __VLS_intrinsicElements["a"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{}, href: ("/homepage"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, href: ("/homepage"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
{
const __VLS_55 = __VLS_intrinsicElements["img"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{}, alt: ("Koko"), src: ("/src/assets/logo.svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, alt: ("Koko"), src: ("/src/assets/logo.svg"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
}
(__VLS_53.slots!).default;
}
(__VLS_48.slots!).default;
}
{
const __VLS_60 = __VLS_intrinsicElements["div"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{}, class: ("flex max-sm:flex-row gap-10 max-sm:gap-10 items-center max-lg:gap-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, class: ("flex max-sm:flex-row gap-10 max-sm:gap-10 items-center max-lg:gap-2"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = __VLS_intrinsicElements["div"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, class: ("flex max-sm:flex-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, class: ("flex max-sm:flex-none"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
{
const __VLS_70 = __VLS_intrinsicElements["ul"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{}, class: ("flex text-nowrap max-sm:flex-nowrap gap-4 max-lg:gap-2 max-sm:gap-5 font-medium uppercase text-l max-sm:text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, class: ("flex text-nowrap max-sm:flex-nowrap gap-4 max-lg:gap-2 max-sm:gap-5 font-medium uppercase text-l max-sm:text-sm"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = __VLS_intrinsicElements["li"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
{
const __VLS_80 = __VLS_intrinsicElements["a"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{}, class: ("pointer-events-none text-zinc-500"), href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, class: ("pointer-events-none text-zinc-500"), href: (""), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
(__VLS_ctx.$t('header_stores'));
(__VLS_83.slots!).default;
}
(__VLS_78.slots!).default;
}
{
const __VLS_85 = __VLS_intrinsicElements["li"];
const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
{
const __VLS_90 = __VLS_intrinsicElements["a"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
const __VLS_92 = __VLS_91({ ...{}, href: ("/#/categories"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, href: ("/#/categories"), });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
(__VLS_ctx.$t('header_categories'));
(__VLS_93.slots!).default;
}
(__VLS_88.slots!).default;
}
{
const __VLS_95 = __VLS_intrinsicElements["li"];
const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
const __VLS_97 = __VLS_96({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
{
const __VLS_100 = __VLS_intrinsicElements["a"];
const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
const __VLS_102 = __VLS_101({ ...{}, href: ("/#/audio-devices"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_100, typeof __VLS_102> & Record<string, unknown>) => void)({ ...{}, href: ("/#/audio-devices"), });
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
let __VLS_104!: __VLS_NormalizeEmits<typeof __VLS_103.emit>;
(__VLS_ctx.$t('header_audio'));
(__VLS_103.slots!).default;
}
(__VLS_98.slots!).default;
}
{
const __VLS_105 = __VLS_intrinsicElements["li"];
const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
const __VLS_107 = __VLS_106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_105, typeof __VLS_107> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
let __VLS_109!: __VLS_NormalizeEmits<typeof __VLS_108.emit>;
{
const __VLS_110 = __VLS_intrinsicElements["a"];
const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
const __VLS_112 = __VLS_111({ ...{}, href: ("/#/video-devices"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_110, typeof __VLS_112> & Record<string, unknown>) => void)({ ...{}, href: ("/#/video-devices"), });
const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112)!;
let __VLS_114!: __VLS_NormalizeEmits<typeof __VLS_113.emit>;
(__VLS_ctx.$t('header_video'));
(__VLS_113.slots!).default;
}
(__VLS_108.slots!).default;
}
{
const __VLS_115 = __VLS_intrinsicElements["li"];
const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
const __VLS_117 = __VLS_116({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_115, typeof __VLS_117> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117)!;
let __VLS_119!: __VLS_NormalizeEmits<typeof __VLS_118.emit>;
{
const __VLS_120 = __VLS_intrinsicElements["a"];
const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
const __VLS_122 = __VLS_121({ ...{}, href: ("/#/about"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_120, typeof __VLS_122> & Record<string, unknown>) => void)({ ...{}, href: ("/#/about"), });
const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122)!;
let __VLS_124!: __VLS_NormalizeEmits<typeof __VLS_123.emit>;
(__VLS_ctx.$t('header_about'));
(__VLS_123.slots!).default;
}
(__VLS_118.slots!).default;
}
{
const __VLS_125 = __VLS_intrinsicElements["li"];
const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
const __VLS_127 = __VLS_126({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_126));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_125, typeof __VLS_127> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127)!;
let __VLS_129!: __VLS_NormalizeEmits<typeof __VLS_128.emit>;
{
const __VLS_130 = __VLS_intrinsicElements["a"];
const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
const __VLS_132 = __VLS_131({ ...{}, href: ("/#/contact"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_130, typeof __VLS_132> & Record<string, unknown>) => void)({ ...{}, href: ("/#/contact"), });
const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132)!;
let __VLS_134!: __VLS_NormalizeEmits<typeof __VLS_133.emit>;
(__VLS_ctx.$t('header_contact'));
(__VLS_133.slots!).default;
}
(__VLS_128.slots!).default;
}
{
const __VLS_135 = __VLS_intrinsicElements["li"];
const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
const __VLS_137 = __VLS_136({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_135, typeof __VLS_137> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137)!;
let __VLS_139!: __VLS_NormalizeEmits<typeof __VLS_138.emit>;
{
const __VLS_140 = __VLS_intrinsicElements["a"];
const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
const __VLS_142 = __VLS_141({ ...{}, href: ("/#/faq"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_140, typeof __VLS_142> & Record<string, unknown>) => void)({ ...{}, href: ("/#/faq"), });
const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142)!;
let __VLS_144!: __VLS_NormalizeEmits<typeof __VLS_143.emit>;
(__VLS_ctx.$t('header_faq'));
(__VLS_143.slots!).default;
}
(__VLS_138.slots!).default;
}
(__VLS_73.slots!).default;
}
(__VLS_68.slots!).default;
}
{
const __VLS_145 = __VLS_intrinsicElements["div"];
const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
const __VLS_147 = __VLS_146({ ...{}, class: ("flex gap-5 max-lg:gap-2 items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_145, typeof __VLS_147> & Record<string, unknown>) => void)({ ...{}, class: ("flex gap-5 max-lg:gap-2 items-center"), });
const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147)!;
let __VLS_149!: __VLS_NormalizeEmits<typeof __VLS_148.emit>;
{
const __VLS_150 = __VLS_intrinsicElements["button"];
const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
const __VLS_152 = __VLS_151({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_150, typeof __VLS_152> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
let __VLS_154!: __VLS_NormalizeEmits<typeof __VLS_153.emit>;
let __VLS_155 = { 'click': __VLS_pickEvent(__VLS_154['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_151, typeof __VLS_152>).onClick) };
__VLS_155 = { click: (__VLS_ctx.makeVisible) };
{
const __VLS_156 = __VLS_intrinsicElements["svg"];
const __VLS_157 = __VLS_elementAsFunctionalComponent(__VLS_156);
const __VLS_158 = __VLS_157({ ...{}, fill: ("none"), height: ("17"), viewBox: ("0 0 20 20"), width: ("17"), xmlns: ("http://www.w3.org/2000/svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_156, typeof __VLS_158> & Record<string, unknown>) => void)({ ...{}, fill: ("none"), height: ("17"), viewBox: ("0 0 20 20"), width: ("17"), xmlns: ("http://www.w3.org/2000/svg"), });
const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158)!;
let __VLS_160!: __VLS_NormalizeEmits<typeof __VLS_159.emit>;
{
const __VLS_161 = __VLS_intrinsicElements["path"];
const __VLS_162 = __VLS_elementAsFunctionalComponent(__VLS_161);
const __VLS_163 = __VLS_162({ ...{}, "clip-rule": ("evenodd"), d: ("M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z"), fill: ("#000000"), "fill-rule": ("evenodd"), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_161, typeof __VLS_163> & Record<string, unknown>) => void)({ ...{}, "clip-rule": ("evenodd"), d: ("M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z"), fill: ("#000000"), "fill-rule": ("evenodd"), });
const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163)!;
let __VLS_165!: __VLS_NormalizeEmits<typeof __VLS_164.emit>;
}
(__VLS_159.slots!).default;
}
(__VLS_153.slots!).default;
}
{
const __VLS_166 = __VLS_intrinsicElements["div"];
const __VLS_167 = __VLS_elementAsFunctionalComponent(__VLS_166);
const __VLS_168 = __VLS_167({ ...{}, class: ("hidden typo absolute left-0 bg-white w-screen flex items-center justify-between px-40 gap-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_166, typeof __VLS_168> & Record<string, unknown>) => void)({ ...{}, class: ("hidden typo absolute left-0 bg-white w-screen flex items-center justify-between px-40 gap-3"), });
const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168)!;
let __VLS_170!: __VLS_NormalizeEmits<typeof __VLS_169.emit>;
{
const __VLS_171 = __VLS_intrinsicElements["div"];
const __VLS_172 = __VLS_elementAsFunctionalComponent(__VLS_171);
const __VLS_173 = __VLS_172({ ...{}, class: ("flex gap-3 max-lg:gap-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_171, typeof __VLS_173> & Record<string, unknown>) => void)({ ...{}, class: ("flex gap-3 max-lg:gap-3"), });
const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173)!;
let __VLS_175!: __VLS_NormalizeEmits<typeof __VLS_174.emit>;
{
const __VLS_176 = __VLS_intrinsicElements["button"];
const __VLS_177 = __VLS_elementAsFunctionalComponent(__VLS_176);
const __VLS_178 = __VLS_177({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_177));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_176, typeof __VLS_178> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_179 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178)!;
let __VLS_180!: __VLS_NormalizeEmits<typeof __VLS_179.emit>;
let __VLS_181 = { 'click': __VLS_pickEvent(__VLS_180['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_177, typeof __VLS_178>).onClick) };
__VLS_181 = { click: (__VLS_ctx.makeVisible) };
{
const __VLS_182 = __VLS_intrinsicElements["svg"];
const __VLS_183 = __VLS_elementAsFunctionalComponent(__VLS_182);
const __VLS_184 = __VLS_183({ ...{}, fill: ("none"), height: ("17"), viewBox: ("0 0 20 20"), width: ("17"), xmlns: ("http://www.w3.org/2000/svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_182, typeof __VLS_184> & Record<string, unknown>) => void)({ ...{}, fill: ("none"), height: ("17"), viewBox: ("0 0 20 20"), width: ("17"), xmlns: ("http://www.w3.org/2000/svg"), });
const __VLS_185 = __VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184)!;
let __VLS_186!: __VLS_NormalizeEmits<typeof __VLS_185.emit>;
{
const __VLS_187 = __VLS_intrinsicElements["path"];
const __VLS_188 = __VLS_elementAsFunctionalComponent(__VLS_187);
const __VLS_189 = __VLS_188({ ...{}, "clip-rule": ("evenodd"), d: ("M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z"), fill: ("#000000"), "fill-rule": ("evenodd"), }, ...__VLS_functionalComponentArgsRest(__VLS_188));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_187, typeof __VLS_189> & Record<string, unknown>) => void)({ ...{}, "clip-rule": ("evenodd"), d: ("M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z"), fill: ("#000000"), "fill-rule": ("evenodd"), });
const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_187, __VLS_189)!;
let __VLS_191!: __VLS_NormalizeEmits<typeof __VLS_190.emit>;
}
(__VLS_185.slots!).default;
}
(__VLS_179.slots!).default;
}
{
const __VLS_192 = __VLS_intrinsicElements["label"];
const __VLS_193 = __VLS_elementAsFunctionalComponent(__VLS_192);
const __VLS_194 = __VLS_193({ ...{}, for: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_192, typeof __VLS_194> & Record<string, unknown>) => void)({ ...{}, for: (""), });
const __VLS_195 = __VLS_pickFunctionalComponentCtx(__VLS_192, __VLS_194)!;
let __VLS_196!: __VLS_NormalizeEmits<typeof __VLS_195.emit>;
{
const __VLS_197 = __VLS_intrinsicElements["input"];
const __VLS_198 = __VLS_elementAsFunctionalComponent(__VLS_197);
const __VLS_199 = __VLS_198({ ...{ onClick: {} as any, }, value: ((__VLS_ctx.showItems)), class: ("border-0 focus:border-0 font-medium inp w-[400px]"), placeholder: ("Search"), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_198));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_197, typeof __VLS_199> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, value: ((__VLS_ctx.showItems)), class: ("border-0 focus:border-0 font-medium inp w-[400px]"), placeholder: ("Search"), type: ("text"), });
const __VLS_200 = __VLS_pickFunctionalComponentCtx(__VLS_197, __VLS_199)!;
let __VLS_201!: __VLS_NormalizeEmits<typeof __VLS_200.emit>;
let __VLS_202 = { 'click': __VLS_pickEvent(__VLS_201['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_198, typeof __VLS_199>).onClick) };
__VLS_202 = { click: (__VLS_ctx.noOut) };
}
(__VLS_195.slots!).default;
}
{
const __VLS_203 = __VLS_intrinsicElements["div"];
const __VLS_204 = __VLS_elementAsFunctionalComponent(__VLS_203);
const __VLS_205 = __VLS_204({ ...{}, class: ("search-result flex flex-col gap-3 absolute top-2.5"), }, ...__VLS_functionalComponentArgsRest(__VLS_204));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_203, typeof __VLS_205> & Record<string, unknown>) => void)({ ...{}, class: ("search-result flex flex-col gap-3 absolute top-2.5"), });
const __VLS_206 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205)!;
let __VLS_207!: __VLS_NormalizeEmits<typeof __VLS_206.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.showItems && __VLS_ctx.filteredItems.length));
{
const __VLS_208 = __VLS_intrinsicElements["a"];
const __VLS_209 = __VLS_elementAsFunctionalComponent(__VLS_208);
const __VLS_210 = __VLS_209({ ...{}, class: ("ml-3 text-zinc-500"), href: ("/#/search"), }, ...__VLS_functionalComponentArgsRest(__VLS_209));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_208, typeof __VLS_210> & Record<string, unknown>) => void)({ ...{}, class: ("ml-3 text-zinc-500"), href: ("/#/search"), });
const __VLS_211 = __VLS_pickFunctionalComponentCtx(__VLS_208, __VLS_210)!;
let __VLS_212!: __VLS_NormalizeEmits<typeof __VLS_211.emit>;
(__VLS_ctx.filteredItems.length);
(__VLS_211.slots!).default;
}
{
const __VLS_213 = __VLS_intrinsicElements["ul"];
const __VLS_214 = __VLS_elementAsFunctionalComponent(__VLS_213);
const __VLS_215 = __VLS_214({ ...{}, class: ("grid grid-cols-6 gap-10 justify-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_214));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_213, typeof __VLS_215> & Record<string, unknown>) => void)({ ...{}, class: ("grid grid-cols-6 gap-10 justify-between"), });
const __VLS_216 = __VLS_pickFunctionalComponentCtx(__VLS_213, __VLS_215)!;
let __VLS_217!: __VLS_NormalizeEmits<typeof __VLS_216.emit>;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filteredItems)!)) {
{
const __VLS_218 = __VLS_intrinsicElements["li"];
const __VLS_219 = __VLS_elementAsFunctionalComponent(__VLS_218);
const __VLS_220 = __VLS_219({ ...{}, key: ((item.id)), class: (" w-[150px]"), }, ...__VLS_functionalComponentArgsRest(__VLS_219));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_218, typeof __VLS_220> & Record<string, unknown>) => void)({ ...{}, key: ((item.id)), class: (" w-[150px]"), });
const __VLS_221 = __VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220)!;
let __VLS_222!: __VLS_NormalizeEmits<typeof __VLS_221.emit>;
{
const __VLS_223 = __VLS_intrinsicElements["a"];
const __VLS_224 = __VLS_elementAsFunctionalComponent(__VLS_223);
const __VLS_225 = __VLS_224({ ...{}, href: ((__VLS_ctx.getItemUrl(item))), }, ...__VLS_functionalComponentArgsRest(__VLS_224));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_223, typeof __VLS_225> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.getItemUrl(item))), });
const __VLS_226 = __VLS_pickFunctionalComponentCtx(__VLS_223, __VLS_225)!;
let __VLS_227!: __VLS_NormalizeEmits<typeof __VLS_226.emit>;
{
const __VLS_228 = __VLS_intrinsicElements["img"];
const __VLS_229 = __VLS_elementAsFunctionalComponent(__VLS_228);
const __VLS_230 = __VLS_229({ ...{}, src: ((__VLS_ctx.getImagePath(item))), alt: ("image"), class: ("w-[150px] h-[150px]"), }, ...__VLS_functionalComponentArgsRest(__VLS_229));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_228, typeof __VLS_230> & Record<string, unknown>) => void)({ ...{}, src: ((__VLS_ctx.getImagePath(item))), alt: ("image"), class: ("w-[150px] h-[150px]"), });
const __VLS_231 = __VLS_pickFunctionalComponentCtx(__VLS_228, __VLS_230)!;
let __VLS_232!: __VLS_NormalizeEmits<typeof __VLS_231.emit>;
}
{
const __VLS_233 = __VLS_intrinsicElements["h2"];
const __VLS_234 = __VLS_elementAsFunctionalComponent(__VLS_233);
const __VLS_235 = __VLS_234({ ...{}, class: ("font-medium"), }, ...__VLS_functionalComponentArgsRest(__VLS_234));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_233, typeof __VLS_235> & Record<string, unknown>) => void)({ ...{}, class: ("font-medium"), });
const __VLS_236 = __VLS_pickFunctionalComponentCtx(__VLS_233, __VLS_235)!;
let __VLS_237!: __VLS_NormalizeEmits<typeof __VLS_236.emit>;
(item.name);
(__VLS_236.slots!).default;
}
{
const __VLS_238 = __VLS_intrinsicElements["h2"];
const __VLS_239 = __VLS_elementAsFunctionalComponent(__VLS_238);
const __VLS_240 = __VLS_239({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_239));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_238, typeof __VLS_240> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_241 = __VLS_pickFunctionalComponentCtx(__VLS_238, __VLS_240)!;
let __VLS_242!: __VLS_NormalizeEmits<typeof __VLS_241.emit>;
(item.price);
(__VLS_241.slots!).default;
}
(__VLS_226.slots!).default;
}
(__VLS_221.slots!).default;
}
// @ts-ignore
[getUsername, $t, $t, $t, $t, $t, $t, $t, makeVisible, makeVisible, showItems, showItems, noOut, showItems, filteredItems, filteredItems, filteredItems, getItemUrl, getItemUrl, getImagePath, getImagePath,];
}
(__VLS_216.slots!).default;
}
(__VLS_206.slots!).default;
}
(__VLS_174.slots!).default;
}
{
const __VLS_243 = __VLS_intrinsicElements["div"];
const __VLS_244 = __VLS_elementAsFunctionalComponent(__VLS_243);
const __VLS_245 = __VLS_244({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_244));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_243, typeof __VLS_245> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_246 = __VLS_pickFunctionalComponentCtx(__VLS_243, __VLS_245)!;
let __VLS_247!: __VLS_NormalizeEmits<typeof __VLS_246.emit>;
{
const __VLS_248 = __VLS_intrinsicElements["button"];
const __VLS_249 = __VLS_elementAsFunctionalComponent(__VLS_248);
const __VLS_250 = __VLS_249({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_249));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_248, typeof __VLS_250> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_251 = __VLS_pickFunctionalComponentCtx(__VLS_248, __VLS_250)!;
let __VLS_252!: __VLS_NormalizeEmits<typeof __VLS_251.emit>;
let __VLS_253 = { 'click': __VLS_pickEvent(__VLS_252['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_249, typeof __VLS_250>).onClick) };
__VLS_253 = { click: (__VLS_ctx.makeVisible) };
{
const __VLS_254 = __VLS_intrinsicElements["svg"];
const __VLS_255 = __VLS_elementAsFunctionalComponent(__VLS_254);
const __VLS_256 = __VLS_255({ ...{}, fill: ("none"), height: ("27"), viewBox: ("0 0 27 27"), width: ("27"), xmlns: ("http://www.w3.org/2000/svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_255));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_254, typeof __VLS_256> & Record<string, unknown>) => void)({ ...{}, fill: ("none"), height: ("27"), viewBox: ("0 0 27 27"), width: ("27"), xmlns: ("http://www.w3.org/2000/svg"), });
const __VLS_257 = __VLS_pickFunctionalComponentCtx(__VLS_254, __VLS_256)!;
let __VLS_258!: __VLS_NormalizeEmits<typeof __VLS_257.emit>;
{
const __VLS_259 = __VLS_intrinsicElements["path"];
const __VLS_260 = __VLS_elementAsFunctionalComponent(__VLS_259);
const __VLS_261 = __VLS_260({ ...{}, d: ("M1.5 1.5L25.5 25.5M1.5 25.5L25.5 1.5"), stroke: ("black"), "stroke-width": ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_260));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_259, typeof __VLS_261> & Record<string, unknown>) => void)({ ...{}, d: ("M1.5 1.5L25.5 25.5M1.5 25.5L25.5 1.5"), stroke: ("black"), "stroke-width": ("2"), });
const __VLS_262 = __VLS_pickFunctionalComponentCtx(__VLS_259, __VLS_261)!;
let __VLS_263!: __VLS_NormalizeEmits<typeof __VLS_262.emit>;
}
(__VLS_257.slots!).default;
}
(__VLS_251.slots!).default;
}
(__VLS_246.slots!).default;
}
(__VLS_169.slots!).default;
}
{
const __VLS_264 = __VLS_intrinsicElements["div"];
const __VLS_265 = __VLS_elementAsFunctionalComponent(__VLS_264);
const __VLS_266 = __VLS_265({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_265));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_264, typeof __VLS_266> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_267 = __VLS_pickFunctionalComponentCtx(__VLS_264, __VLS_266)!;
let __VLS_268!: __VLS_NormalizeEmits<typeof __VLS_267.emit>;
{
const __VLS_269 = __VLS_intrinsicElements["a"];
const __VLS_270 = __VLS_elementAsFunctionalComponent(__VLS_269);
const __VLS_271 = __VLS_270({ ...{}, class: ("flex items-center gap-3"), href: ("/#/cart"), }, ...__VLS_functionalComponentArgsRest(__VLS_270));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_269, typeof __VLS_271> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center gap-3"), href: ("/#/cart"), });
const __VLS_272 = __VLS_pickFunctionalComponentCtx(__VLS_269, __VLS_271)!;
let __VLS_273!: __VLS_NormalizeEmits<typeof __VLS_272.emit>;
{
const __VLS_274 = __VLS_intrinsicElements["svg"];
const __VLS_275 = __VLS_elementAsFunctionalComponent(__VLS_274);
const __VLS_276 = __VLS_275({ ...{}, fill: ("none"), height: ("13"), viewBox: ("0 0 16 13"), width: ("16"), xmlns: ("http://www.w3.org/2000/svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_275));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_274, typeof __VLS_276> & Record<string, unknown>) => void)({ ...{}, fill: ("none"), height: ("13"), viewBox: ("0 0 16 13"), width: ("16"), xmlns: ("http://www.w3.org/2000/svg"), });
const __VLS_277 = __VLS_pickFunctionalComponentCtx(__VLS_274, __VLS_276)!;
let __VLS_278!: __VLS_NormalizeEmits<typeof __VLS_277.emit>;
{
const __VLS_279 = __VLS_intrinsicElements["path"];
const __VLS_280 = __VLS_elementAsFunctionalComponent(__VLS_279);
const __VLS_281 = __VLS_280({ ...{}, d: ("M4 4H2.5C1.39543 4 0.5 4.89543 0.5 6V10.5C0.5 11.6046 1.39543 12.5 2.5 12.5H13.5C14.6046 12.5 15.5 11.6046 15.5 10.5V6C15.5 4.89543 14.6046 4 13.5 4H4ZM4 4V2.5C4 1.39543 4.89543 0.5 6 0.5H10C11.1046 0.5 12 1.39543 12 2.5V3.5"), stroke: ("black"), }, ...__VLS_functionalComponentArgsRest(__VLS_280));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_279, typeof __VLS_281> & Record<string, unknown>) => void)({ ...{}, d: ("M4 4H2.5C1.39543 4 0.5 4.89543 0.5 6V10.5C0.5 11.6046 1.39543 12.5 2.5 12.5H13.5C14.6046 12.5 15.5 11.6046 15.5 10.5V6C15.5 4.89543 14.6046 4 13.5 4H4ZM4 4V2.5C4 1.39543 4.89543 0.5 6 0.5H10C11.1046 0.5 12 1.39543 12 2.5V3.5"), stroke: ("black"), });
const __VLS_282 = __VLS_pickFunctionalComponentCtx(__VLS_279, __VLS_281)!;
let __VLS_283!: __VLS_NormalizeEmits<typeof __VLS_282.emit>;
}
(__VLS_277.slots!).default;
}
if (__VLS_ctx.cartStore.totalItems > 0) {
{
const __VLS_284 = __VLS_intrinsicElements["span"];
const __VLS_285 = __VLS_elementAsFunctionalComponent(__VLS_284);
const __VLS_286 = __VLS_285({ ...{}, class: ("bg-black text-white rounded-full w-[25px] flex self-center justify-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_285));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_284, typeof __VLS_286> & Record<string, unknown>) => void)({ ...{}, class: ("bg-black text-white rounded-full w-[25px] flex self-center justify-center"), });
const __VLS_287 = __VLS_pickFunctionalComponentCtx(__VLS_284, __VLS_286)!;
let __VLS_288!: __VLS_NormalizeEmits<typeof __VLS_287.emit>;
(
__VLS_ctx.cartStore.totalItems
);
(__VLS_287.slots!).default;
}
// @ts-ignore
[makeVisible, cartStore, cartStore,];
}
(__VLS_272.slots!).default;
}
(__VLS_267.slots!).default;
}
(__VLS_148.slots!).default;
}
(__VLS_63.slots!).default;
}
(__VLS_43.slots!).default;
}
{
const __VLS_289 = __VLS_intrinsicElements["div"];
const __VLS_290 = __VLS_elementAsFunctionalComponent(__VLS_289);
const __VLS_291 = __VLS_290({ ...{}, class: ("sm:block xl:hidden lg:hidden relative z-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_290));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_289, typeof __VLS_291> & Record<string, unknown>) => void)({ ...{}, class: ("sm:block xl:hidden lg:hidden relative z-10"), });
const __VLS_292 = __VLS_pickFunctionalComponentCtx(__VLS_289, __VLS_291)!;
let __VLS_293!: __VLS_NormalizeEmits<typeof __VLS_292.emit>;
{
const __VLS_294 = __VLS_intrinsicElements["div"];
const __VLS_295 = __VLS_elementAsFunctionalComponent(__VLS_294);
const __VLS_296 = __VLS_295({ ...{}, class: ("hidden bg-transparent max-sm:flex justify-start items-start absolute"), }, ...__VLS_functionalComponentArgsRest(__VLS_295));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_294, typeof __VLS_296> & Record<string, unknown>) => void)({ ...{}, class: ("hidden bg-transparent max-sm:flex justify-start items-start absolute"), });
const __VLS_297 = __VLS_pickFunctionalComponentCtx(__VLS_294, __VLS_296)!;
let __VLS_298!: __VLS_NormalizeEmits<typeof __VLS_297.emit>;
{
const __VLS_299 = __VLS_intrinsicElements["div"];
const __VLS_300 = __VLS_elementAsFunctionalComponent(__VLS_299);
const __VLS_301 = __VLS_300({ ...{}, class: ("bg-white max-sm:w-screen p-2 pr-3 flex flex-col gap-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_300));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_299, typeof __VLS_301> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white max-sm:w-screen p-2 pr-3 flex flex-col gap-3"), });
const __VLS_302 = __VLS_pickFunctionalComponentCtx(__VLS_299, __VLS_301)!;
let __VLS_303!: __VLS_NormalizeEmits<typeof __VLS_302.emit>;
{
const __VLS_304 = __VLS_intrinsicElements["div"];
const __VLS_305 = __VLS_elementAsFunctionalComponent(__VLS_304);
const __VLS_306 = __VLS_305({ ...{}, class: ("flex items-center gap-3 justify-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_305));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_304, typeof __VLS_306> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center gap-3 justify-between"), });
const __VLS_307 = __VLS_pickFunctionalComponentCtx(__VLS_304, __VLS_306)!;
let __VLS_308!: __VLS_NormalizeEmits<typeof __VLS_307.emit>;
{
const __VLS_309 = __VLS_intrinsicElements["button"];
const __VLS_310 = __VLS_elementAsFunctionalComponent(__VLS_309);
const __VLS_311 = __VLS_310({ ...{ onClick: {} as any, }, class: ("rotate-180 items-center gap-2 font-medium flex bg-white"), type: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_310));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_309, typeof __VLS_311> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("rotate-180 items-center gap-2 font-medium flex bg-white"), type: ("button"), });
const __VLS_312 = __VLS_pickFunctionalComponentCtx(__VLS_309, __VLS_311)!;
let __VLS_313!: __VLS_NormalizeEmits<typeof __VLS_312.emit>;
let __VLS_314 = { 'click': __VLS_pickEvent(__VLS_313['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_310, typeof __VLS_311>).onClick) };
__VLS_314 = { click: (__VLS_ctx.toggleMenu) };
{
const __VLS_315 = __VLS_intrinsicElements["span"];
const __VLS_316 = __VLS_elementAsFunctionalComponent(__VLS_315);
const __VLS_317 = __VLS_316({ ...{}, class: ("rotate-180"), }, ...__VLS_functionalComponentArgsRest(__VLS_316));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_315, typeof __VLS_317> & Record<string, unknown>) => void)({ ...{}, class: ("rotate-180"), });
const __VLS_318 = __VLS_pickFunctionalComponentCtx(__VLS_315, __VLS_317)!;
let __VLS_319!: __VLS_NormalizeEmits<typeof __VLS_318.emit>;
(__VLS_318.slots!).default;
}
{
const __VLS_320 = __VLS_intrinsicElements["svg"];
const __VLS_321 = __VLS_elementAsFunctionalComponent(__VLS_320);
const __VLS_322 = __VLS_321({ ...{}, height: ("32"), style: ({}), version: ("1.1"), viewBox: ("0 0 40 40"), width: ("32"), x: ("0"), "xml:space": ("preserve"), xmlns: ("http://www.w3.org/2000/svg"), "xmlns:xlink": ("http://www.w3.org/1999/xlink"), y: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_321));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_320, typeof __VLS_322> & Record<string, unknown>) => void)({ ...{}, height: ("32"), style: ({}), version: ("1.1"), viewBox: ("0 0 40 40"), width: ("32"), x: ("0"), "xml:space": ("preserve"), xmlns: ("http://www.w3.org/2000/svg"), "xmlns:xlink": ("http://www.w3.org/1999/xlink"), y: ("0"), });
const __VLS_323 = __VLS_pickFunctionalComponentCtx(__VLS_320, __VLS_322)!;
let __VLS_324!: __VLS_NormalizeEmits<typeof __VLS_323.emit>;
{
const __VLS_325 = __VLS_intrinsicElements["g"];
const __VLS_326 = __VLS_elementAsFunctionalComponent(__VLS_325);
const __VLS_327 = __VLS_326({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_326));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_325, typeof __VLS_327> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_328 = __VLS_pickFunctionalComponentCtx(__VLS_325, __VLS_327)!;
let __VLS_329!: __VLS_NormalizeEmits<typeof __VLS_328.emit>;
{
const __VLS_330 = __VLS_intrinsicElements["g"];
const __VLS_331 = __VLS_elementAsFunctionalComponent(__VLS_330);
const __VLS_332 = __VLS_331({ ...{}, "clip-rule": ("evenodd"), fill: ("#000"), "fill-rule": ("evenodd"), }, ...__VLS_functionalComponentArgsRest(__VLS_331));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_330, typeof __VLS_332> & Record<string, unknown>) => void)({ ...{}, "clip-rule": ("evenodd"), fill: ("#000"), "fill-rule": ("evenodd"), });
const __VLS_333 = __VLS_pickFunctionalComponentCtx(__VLS_330, __VLS_332)!;
let __VLS_334!: __VLS_NormalizeEmits<typeof __VLS_333.emit>;
{
const __VLS_335 = __VLS_intrinsicElements["path"];
const __VLS_336 = __VLS_elementAsFunctionalComponent(__VLS_335);
const __VLS_337 = __VLS_336({ ...{}, d: ("M3.75 10c0-.69.56-1.25 1.25-1.25h30a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25zM3.75 30c0-.69.56-1.25 1.25-1.25h30a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25zM10.417 20c0-.69.56-1.25 1.25-1.25H35a1.25 1.25 0 1 1 0 2.5H11.667c-.69 0-1.25-.56-1.25-1.25z"), "data-original": ("#000000"), fill: ("#000000"), opacity: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_336));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_335, typeof __VLS_337> & Record<string, unknown>) => void)({ ...{}, d: ("M3.75 10c0-.69.56-1.25 1.25-1.25h30a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25zM3.75 30c0-.69.56-1.25 1.25-1.25h30a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25zM10.417 20c0-.69.56-1.25 1.25-1.25H35a1.25 1.25 0 1 1 0 2.5H11.667c-.69 0-1.25-.56-1.25-1.25z"), "data-original": ("#000000"), fill: ("#000000"), opacity: ("1"), });
const __VLS_338 = __VLS_pickFunctionalComponentCtx(__VLS_335, __VLS_337)!;
let __VLS_339!: __VLS_NormalizeEmits<typeof __VLS_338.emit>;
}
(__VLS_333.slots!).default;
}
(__VLS_328.slots!).default;
}
(__VLS_323.slots!).default;
}
(__VLS_312.slots!).default;
}
{
const __VLS_340 = __VLS_intrinsicElements["div"];
const __VLS_341 = __VLS_elementAsFunctionalComponent(__VLS_340);
const __VLS_342 = __VLS_341({ ...{}, class: ("w-48 max-sm:w-[20rem] h-7"), }, ...__VLS_functionalComponentArgsRest(__VLS_341));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_340, typeof __VLS_342> & Record<string, unknown>) => void)({ ...{}, class: ("w-48 max-sm:w-[20rem] h-7"), });
const __VLS_343 = __VLS_pickFunctionalComponentCtx(__VLS_340, __VLS_342)!;
let __VLS_344!: __VLS_NormalizeEmits<typeof __VLS_343.emit>;
{
const __VLS_345 = __VLS_intrinsicElements["label"];
const __VLS_346 = __VLS_elementAsFunctionalComponent(__VLS_345);
const __VLS_347 = __VLS_346({ ...{}, class: ("relative block"), }, ...__VLS_functionalComponentArgsRest(__VLS_346));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_345, typeof __VLS_347> & Record<string, unknown>) => void)({ ...{}, class: ("relative block"), });
const __VLS_348 = __VLS_pickFunctionalComponentCtx(__VLS_345, __VLS_347)!;
let __VLS_349!: __VLS_NormalizeEmits<typeof __VLS_348.emit>;
{
const __VLS_350 = __VLS_intrinsicElements["span"];
const __VLS_351 = __VLS_elementAsFunctionalComponent(__VLS_350);
const __VLS_352 = __VLS_351({ ...{}, class: ("sr-only"), }, ...__VLS_functionalComponentArgsRest(__VLS_351));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_350, typeof __VLS_352> & Record<string, unknown>) => void)({ ...{}, class: ("sr-only"), });
const __VLS_353 = __VLS_pickFunctionalComponentCtx(__VLS_350, __VLS_352)!;
let __VLS_354!: __VLS_NormalizeEmits<typeof __VLS_353.emit>;
(__VLS_353.slots!).default;
}
{
const __VLS_355 = __VLS_intrinsicElements["span"];
const __VLS_356 = __VLS_elementAsFunctionalComponent(__VLS_355);
const __VLS_357 = __VLS_356({ ...{}, class: ("absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer"), }, ...__VLS_functionalComponentArgsRest(__VLS_356));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_355, typeof __VLS_357> & Record<string, unknown>) => void)({ ...{}, class: ("absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer"), });
const __VLS_358 = __VLS_pickFunctionalComponentCtx(__VLS_355, __VLS_357)!;
let __VLS_359!: __VLS_NormalizeEmits<typeof __VLS_358.emit>;
{
const __VLS_360 = __VLS_intrinsicElements["a"];
const __VLS_361 = __VLS_elementAsFunctionalComponent(__VLS_360);
const __VLS_362 = __VLS_361({ ...{}, href: ("/#/"), }, ...__VLS_functionalComponentArgsRest(__VLS_361));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_360, typeof __VLS_362> & Record<string, unknown>) => void)({ ...{}, href: ("/#/"), });
const __VLS_363 = __VLS_pickFunctionalComponentCtx(__VLS_360, __VLS_362)!;
let __VLS_364!: __VLS_NormalizeEmits<typeof __VLS_363.emit>;
{
const __VLS_365 = __VLS_intrinsicElements["svg"];
const __VLS_366 = __VLS_elementAsFunctionalComponent(__VLS_365);
const __VLS_367 = __VLS_366({ ...{}, fill: ("none"), height: ("17"), viewBox: ("0 0 17 17"), width: ("17"), xmlns: ("http://www.w3.org/2000/svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_366));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_365, typeof __VLS_367> & Record<string, unknown>) => void)({ ...{}, fill: ("none"), height: ("17"), viewBox: ("0 0 17 17"), width: ("17"), xmlns: ("http://www.w3.org/2000/svg"), });
const __VLS_368 = __VLS_pickFunctionalComponentCtx(__VLS_365, __VLS_367)!;
let __VLS_369!: __VLS_NormalizeEmits<typeof __VLS_368.emit>;
{
const __VLS_370 = __VLS_intrinsicElements["path"];
const __VLS_371 = __VLS_elementAsFunctionalComponent(__VLS_370);
const __VLS_372 = __VLS_371({ ...{}, "clip-rule": ("evenodd"), d: ("M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z"), fill: ("#A1A1AA"), "fill-rule": ("evenodd"), }, ...__VLS_functionalComponentArgsRest(__VLS_371));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_370, typeof __VLS_372> & Record<string, unknown>) => void)({ ...{}, "clip-rule": ("evenodd"), d: ("M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z"), fill: ("#A1A1AA"), "fill-rule": ("evenodd"), });
const __VLS_373 = __VLS_pickFunctionalComponentCtx(__VLS_370, __VLS_372)!;
let __VLS_374!: __VLS_NormalizeEmits<typeof __VLS_373.emit>;
}
(__VLS_368.slots!).default;
}
(__VLS_363.slots!).default;
}
(__VLS_358.slots!).default;
}
{
const __VLS_375 = __VLS_intrinsicElements["input"];
const __VLS_376 = __VLS_elementAsFunctionalComponent(__VLS_375);
const __VLS_377 = __VLS_376({ ...{ onInput: {} as any, onFocus: {} as any, }, value: ((__VLS_ctx.showItems)), class: ("w-full h-7 placeholder:text-gray-400 block border-marsh bg-transparent border-1 py-2 pl-3 pr-3 focus:outline-none rounded-sm focus:border-0 focus:ring-gray-500 max-sm:text-sm"), name: ("search"), placeholder: ("Search for anything..."), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_376));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_375, typeof __VLS_377> & Record<string, unknown>) => void)({ ...{ onInput: {} as any, onFocus: {} as any, }, value: ((__VLS_ctx.showItems)), class: ("w-full h-7 placeholder:text-gray-400 block border-marsh bg-transparent border-1 py-2 pl-3 pr-3 focus:outline-none rounded-sm focus:border-0 focus:ring-gray-500 max-sm:text-sm"), name: ("search"), placeholder: ("Search for anything..."), type: ("text"), });
const __VLS_378 = __VLS_pickFunctionalComponentCtx(__VLS_375, __VLS_377)!;
let __VLS_379!: __VLS_NormalizeEmits<typeof __VLS_378.emit>;
let __VLS_380 = { 'input': __VLS_pickEvent(__VLS_379['input'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_376, typeof __VLS_377>).onInput) };
__VLS_380 = { input: (__VLS_ctx.filteredItems) };
let __VLS_381 = { 'focus': __VLS_pickEvent(__VLS_379['focus'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_376, typeof __VLS_377>).onFocus) };
__VLS_381 = {
focus: $event => {
__VLS_ctx.showItems = true;
// @ts-ignore
[toggleMenu, showItems, showItems, filteredItems, showItems,];
}
};
}
(__VLS_348.slots!).default;
}
{
const __VLS_382 = __VLS_intrinsicElements["div"];
const __VLS_383 = __VLS_elementAsFunctionalComponent(__VLS_382);
const __VLS_384 = __VLS_383({ ...{}, ref: ("searchResult"), class: ("search-result flex flex-col max-sm:w-[430px] gap-3 absolute top-4 left-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_383));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_382, typeof __VLS_384> & Record<string, unknown>) => void)({ ...{}, ref: ("searchResult"), class: ("search-result flex flex-col max-sm:w-[430px] gap-3 absolute top-4 left-0"), });
const __VLS_385 = __VLS_pickFunctionalComponentCtx(__VLS_382, __VLS_384)!;
let __VLS_386!: __VLS_NormalizeEmits<typeof __VLS_385.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.showItems && __VLS_ctx.filteredItems.length));
// @ts-ignore
(__VLS_ctx.searchResult);
{
const __VLS_387 = __VLS_intrinsicElements["a"];
const __VLS_388 = __VLS_elementAsFunctionalComponent(__VLS_387);
const __VLS_389 = __VLS_388({ ...{}, class: ("ml-3 text-zinc-500"), href: ("/#/search"), }, ...__VLS_functionalComponentArgsRest(__VLS_388));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_387, typeof __VLS_389> & Record<string, unknown>) => void)({ ...{}, class: ("ml-3 text-zinc-500"), href: ("/#/search"), });
const __VLS_390 = __VLS_pickFunctionalComponentCtx(__VLS_387, __VLS_389)!;
let __VLS_391!: __VLS_NormalizeEmits<typeof __VLS_390.emit>;
(__VLS_ctx.filteredItems.length);
(__VLS_390.slots!).default;
}
{
const __VLS_392 = __VLS_intrinsicElements["ul"];
const __VLS_393 = __VLS_elementAsFunctionalComponent(__VLS_392);
const __VLS_394 = __VLS_393({ ...{}, class: ("grid grid-cols-2 gap-10 w-[430px] justify-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_393));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_392, typeof __VLS_394> & Record<string, unknown>) => void)({ ...{}, class: ("grid grid-cols-2 gap-10 w-[430px] justify-between"), });
const __VLS_395 = __VLS_pickFunctionalComponentCtx(__VLS_392, __VLS_394)!;
let __VLS_396!: __VLS_NormalizeEmits<typeof __VLS_395.emit>;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filteredItems)!)) {
{
const __VLS_397 = __VLS_intrinsicElements["li"];
const __VLS_398 = __VLS_elementAsFunctionalComponent(__VLS_397);
const __VLS_399 = __VLS_398({ ...{}, key: ((item.id)), class: (" w-[150px]"), }, ...__VLS_functionalComponentArgsRest(__VLS_398));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_397, typeof __VLS_399> & Record<string, unknown>) => void)({ ...{}, key: ((item.id)), class: (" w-[150px]"), });
const __VLS_400 = __VLS_pickFunctionalComponentCtx(__VLS_397, __VLS_399)!;
let __VLS_401!: __VLS_NormalizeEmits<typeof __VLS_400.emit>;
{
const __VLS_402 = __VLS_intrinsicElements["a"];
const __VLS_403 = __VLS_elementAsFunctionalComponent(__VLS_402);
const __VLS_404 = __VLS_403({ ...{}, href: ((__VLS_ctx.getItemUrl(item))), }, ...__VLS_functionalComponentArgsRest(__VLS_403));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_402, typeof __VLS_404> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.getItemUrl(item))), });
const __VLS_405 = __VLS_pickFunctionalComponentCtx(__VLS_402, __VLS_404)!;
let __VLS_406!: __VLS_NormalizeEmits<typeof __VLS_405.emit>;
{
const __VLS_407 = __VLS_intrinsicElements["img"];
const __VLS_408 = __VLS_elementAsFunctionalComponent(__VLS_407);
const __VLS_409 = __VLS_408({ ...{}, src: ((__VLS_ctx.import)), __VLS_ctx, : .getImagePath__VLS_ctx.(item) }), alt: ("image"); class { } ("w-[150px] h-[150px]"), ;
} __VLS_functionalComponentArgsRest(__VLS_408);;
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_407, typeof __VLS_409> & Record<string, unknown>) => void)({ ...{}, src: ((__VLS_ctx.import)), __VLS_ctx, : .getImagePath__VLS_ctx.(item) }); alt: ("image"), class { }; ("w-[150px] h-[150px]"), ;
};
const __VLS_410 = __VLS_pickFunctionalComponentCtx(__VLS_407, __VLS_409)!;
let __VLS_411!: __VLS_NormalizeEmits<typeof __VLS_410.emit>;
}
{
const __VLS_412 = __VLS_intrinsicElements["h2"];
const __VLS_413 = __VLS_elementAsFunctionalComponent(__VLS_412);
const __VLS_414 = __VLS_413({ ...{}, class: ("font-medium"), }, ...__VLS_functionalComponentArgsRest(__VLS_413));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_412, typeof __VLS_414> & Record<string, unknown>) => void)({ ...{}, class: ("font-medium"), });
const __VLS_415 = __VLS_pickFunctionalComponentCtx(__VLS_412, __VLS_414)!;
let __VLS_416!: __VLS_NormalizeEmits<typeof __VLS_415.emit>;
(item.name);
(__VLS_415.slots!).default;
}
{
const __VLS_417 = __VLS_intrinsicElements["h2"];
const __VLS_418 = __VLS_elementAsFunctionalComponent(__VLS_417);
const __VLS_419 = __VLS_418({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_418));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_417, typeof __VLS_419> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_420 = __VLS_pickFunctionalComponentCtx(__VLS_417, __VLS_419)!;
let __VLS_421!: __VLS_NormalizeEmits<typeof __VLS_420.emit>;
(item.price);
(__VLS_420.slots!).default;
}
(__VLS_405.slots!).default;
}
(__VLS_400.slots!).default;
}
// @ts-ignore
[showItems, filteredItems, searchResult, filteredItems, filteredItems, getItemUrl, getItemUrl, , getImagePath, , , getImagePath, ,];
}
(__VLS_395.slots!).default;
}
(__VLS_385.slots!).default;
}
(__VLS_343.slots!).default;
}
{
const __VLS_422 = __VLS_intrinsicElements["div"];
const __VLS_423 = __VLS_elementAsFunctionalComponent(__VLS_422);
const __VLS_424 = __VLS_423({ ...{}, class: ("flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_423));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_422, typeof __VLS_424> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center"), });
const __VLS_425 = __VLS_pickFunctionalComponentCtx(__VLS_422, __VLS_424)!;
let __VLS_426!: __VLS_NormalizeEmits<typeof __VLS_425.emit>;
{
const __VLS_427 = __VLS_intrinsicElements["a"];
const __VLS_428 = __VLS_elementAsFunctionalComponent(__VLS_427);
const __VLS_429 = __VLS_428({ ...{}, href: ("/#/cart"), }, ...__VLS_functionalComponentArgsRest(__VLS_428));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_427, typeof __VLS_429> & Record<string, unknown>) => void)({ ...{}, href: ("/#/cart"), });
const __VLS_430 = __VLS_pickFunctionalComponentCtx(__VLS_427, __VLS_429)!;
let __VLS_431!: __VLS_NormalizeEmits<typeof __VLS_430.emit>;
{
const __VLS_432 = __VLS_intrinsicElements["svg"];
const __VLS_433 = __VLS_elementAsFunctionalComponent(__VLS_432);
const __VLS_434 = __VLS_433({ ...{}, fill: ("none"), height: ("18"), viewBox: ("0 0 16 13"), width: ("23"), xmlns: ("http://www.w3.org/2000/svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_433));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_432, typeof __VLS_434> & Record<string, unknown>) => void)({ ...{}, fill: ("none"), height: ("18"), viewBox: ("0 0 16 13"), width: ("23"), xmlns: ("http://www.w3.org/2000/svg"), });
const __VLS_435 = __VLS_pickFunctionalComponentCtx(__VLS_432, __VLS_434)!;
let __VLS_436!: __VLS_NormalizeEmits<typeof __VLS_435.emit>;
{
const __VLS_437 = __VLS_intrinsicElements["path"];
const __VLS_438 = __VLS_elementAsFunctionalComponent(__VLS_437);
const __VLS_439 = __VLS_438({ ...{}, d: ("M4 4H2.5C1.39543 4 0.5 4.89543 0.5 6V10.5C0.5 11.6046 1.39543 12.5 2.5 12.5H13.5C14.6046 12.5 15.5 11.6046 15.5 10.5V6C15.5 4.89543 14.6046 4 13.5 4H4ZM4 4V2.5C4 1.39543 4.89543 0.5 6 0.5H10C11.1046 0.5 12 1.39543 12 2.5V3.5"), stroke: ("black"), }, ...__VLS_functionalComponentArgsRest(__VLS_438));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_437, typeof __VLS_439> & Record<string, unknown>) => void)({ ...{}, d: ("M4 4H2.5C1.39543 4 0.5 4.89543 0.5 6V10.5C0.5 11.6046 1.39543 12.5 2.5 12.5H13.5C14.6046 12.5 15.5 11.6046 15.5 10.5V6C15.5 4.89543 14.6046 4 13.5 4H4ZM4 4V2.5C4 1.39543 4.89543 0.5 6 0.5H10C11.1046 0.5 12 1.39543 12 2.5V3.5"), stroke: ("black"), });
const __VLS_440 = __VLS_pickFunctionalComponentCtx(__VLS_437, __VLS_439)!;
let __VLS_441!: __VLS_NormalizeEmits<typeof __VLS_440.emit>;
}
(__VLS_435.slots!).default;
}
(__VLS_430.slots!).default;
}
(__VLS_425.slots!).default;
}
(__VLS_307.slots!).default;
}
if (__VLS_ctx.isMenuOpen) {
{
const __VLS_442 = __VLS_intrinsicElements["div"];
const __VLS_443 = __VLS_elementAsFunctionalComponent(__VLS_442);
const __VLS_444 = __VLS_443({ ...{}, class: ("ease-in-out duration-300 bg-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_443));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_442, typeof __VLS_444> & Record<string, unknown>) => void)({ ...{}, class: ("ease-in-out duration-300 bg-white"), });
const __VLS_445 = __VLS_pickFunctionalComponentCtx(__VLS_442, __VLS_444)!;
let __VLS_446!: __VLS_NormalizeEmits<typeof __VLS_445.emit>;
{
const __VLS_447 = __VLS_intrinsicElements["ul"];
const __VLS_448 = __VLS_elementAsFunctionalComponent(__VLS_447);
const __VLS_449 = __VLS_448({ ...{}, class: ("flex flex-col gap-4 max-sm:gap-5 font-medium uppercase text-l max-sm:text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_448));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_447, typeof __VLS_449> & Record<string, unknown>) => void)({ ...{}, class: ("flex flex-col gap-4 max-sm:gap-5 font-medium uppercase text-l max-sm:text-sm"), });
const __VLS_450 = __VLS_pickFunctionalComponentCtx(__VLS_447, __VLS_449)!;
let __VLS_451!: __VLS_NormalizeEmits<typeof __VLS_450.emit>;
{
const __VLS_452 = __VLS_intrinsicElements["li"];
const __VLS_453 = __VLS_elementAsFunctionalComponent(__VLS_452);
const __VLS_454 = __VLS_453({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_453));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_452, typeof __VLS_454> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_455 = __VLS_pickFunctionalComponentCtx(__VLS_452, __VLS_454)!;
let __VLS_456!: __VLS_NormalizeEmits<typeof __VLS_455.emit>;
{
const __VLS_457 = __VLS_intrinsicElements["a"];
const __VLS_458 = __VLS_elementAsFunctionalComponent(__VLS_457);
const __VLS_459 = __VLS_458({ ...{}, class: ("bg-white"), href: ("/#/"), }, ...__VLS_functionalComponentArgsRest(__VLS_458));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_457, typeof __VLS_459> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), href: ("/#/"), });
const __VLS_460 = __VLS_pickFunctionalComponentCtx(__VLS_457, __VLS_459)!;
let __VLS_461!: __VLS_NormalizeEmits<typeof __VLS_460.emit>;
(__VLS_460.slots!).default;
}
(__VLS_455.slots!).default;
}
{
const __VLS_462 = __VLS_intrinsicElements["li"];
const __VLS_463 = __VLS_elementAsFunctionalComponent(__VLS_462);
const __VLS_464 = __VLS_463({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_463));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_462, typeof __VLS_464> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_465 = __VLS_pickFunctionalComponentCtx(__VLS_462, __VLS_464)!;
let __VLS_466!: __VLS_NormalizeEmits<typeof __VLS_465.emit>;
{
const __VLS_467 = __VLS_intrinsicElements["a"];
const __VLS_468 = __VLS_elementAsFunctionalComponent(__VLS_467);
const __VLS_469 = __VLS_468({ ...{}, class: ("pointer-events-none bg-white text-zinc-500"), href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_468));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_467, typeof __VLS_469> & Record<string, unknown>) => void)({ ...{}, class: ("pointer-events-none bg-white text-zinc-500"), href: (""), });
const __VLS_470 = __VLS_pickFunctionalComponentCtx(__VLS_467, __VLS_469)!;
let __VLS_471!: __VLS_NormalizeEmits<typeof __VLS_470.emit>;
(__VLS_470.slots!).default;
}
(__VLS_465.slots!).default;
}
{
const __VLS_472 = __VLS_intrinsicElements["li"];
const __VLS_473 = __VLS_elementAsFunctionalComponent(__VLS_472);
const __VLS_474 = __VLS_473({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_473));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_472, typeof __VLS_474> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_475 = __VLS_pickFunctionalComponentCtx(__VLS_472, __VLS_474)!;
let __VLS_476!: __VLS_NormalizeEmits<typeof __VLS_475.emit>;
{
const __VLS_477 = __VLS_intrinsicElements["a"];
const __VLS_478 = __VLS_elementAsFunctionalComponent(__VLS_477);
const __VLS_479 = __VLS_478({ ...{}, class: ("bg-white"), href: ("/#/categories"), }, ...__VLS_functionalComponentArgsRest(__VLS_478));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_477, typeof __VLS_479> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), href: ("/#/categories"), });
const __VLS_480 = __VLS_pickFunctionalComponentCtx(__VLS_477, __VLS_479)!;
let __VLS_481!: __VLS_NormalizeEmits<typeof __VLS_480.emit>;
(__VLS_480.slots!).default;
}
(__VLS_475.slots!).default;
}
{
const __VLS_482 = __VLS_intrinsicElements["li"];
const __VLS_483 = __VLS_elementAsFunctionalComponent(__VLS_482);
const __VLS_484 = __VLS_483({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_483));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_482, typeof __VLS_484> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_485 = __VLS_pickFunctionalComponentCtx(__VLS_482, __VLS_484)!;
let __VLS_486!: __VLS_NormalizeEmits<typeof __VLS_485.emit>;
{
const __VLS_487 = __VLS_intrinsicElements["a"];
const __VLS_488 = __VLS_elementAsFunctionalComponent(__VLS_487);
const __VLS_489 = __VLS_488({ ...{}, class: ("bg-white"), href: ("/#/audio-devices"), }, ...__VLS_functionalComponentArgsRest(__VLS_488));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_487, typeof __VLS_489> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), href: ("/#/audio-devices"), });
const __VLS_490 = __VLS_pickFunctionalComponentCtx(__VLS_487, __VLS_489)!;
let __VLS_491!: __VLS_NormalizeEmits<typeof __VLS_490.emit>;
(__VLS_490.slots!).default;
}
(__VLS_485.slots!).default;
}
{
const __VLS_492 = __VLS_intrinsicElements["li"];
const __VLS_493 = __VLS_elementAsFunctionalComponent(__VLS_492);
const __VLS_494 = __VLS_493({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_493));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_492, typeof __VLS_494> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_495 = __VLS_pickFunctionalComponentCtx(__VLS_492, __VLS_494)!;
let __VLS_496!: __VLS_NormalizeEmits<typeof __VLS_495.emit>;
{
const __VLS_497 = __VLS_intrinsicElements["a"];
const __VLS_498 = __VLS_elementAsFunctionalComponent(__VLS_497);
const __VLS_499 = __VLS_498({ ...{}, class: ("bg-white"), href: ("/#/video-devices"), }, ...__VLS_functionalComponentArgsRest(__VLS_498));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_497, typeof __VLS_499> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), href: ("/#/video-devices"), });
const __VLS_500 = __VLS_pickFunctionalComponentCtx(__VLS_497, __VLS_499)!;
let __VLS_501!: __VLS_NormalizeEmits<typeof __VLS_500.emit>;
(__VLS_500.slots!).default;
}
(__VLS_495.slots!).default;
}
{
const __VLS_502 = __VLS_intrinsicElements["li"];
const __VLS_503 = __VLS_elementAsFunctionalComponent(__VLS_502);
const __VLS_504 = __VLS_503({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_503));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_502, typeof __VLS_504> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_505 = __VLS_pickFunctionalComponentCtx(__VLS_502, __VLS_504)!;
let __VLS_506!: __VLS_NormalizeEmits<typeof __VLS_505.emit>;
{
const __VLS_507 = __VLS_intrinsicElements["a"];
const __VLS_508 = __VLS_elementAsFunctionalComponent(__VLS_507);
const __VLS_509 = __VLS_508({ ...{}, class: ("bg-white"), href: ("/#/about"), }, ...__VLS_functionalComponentArgsRest(__VLS_508));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_507, typeof __VLS_509> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), href: ("/#/about"), });
const __VLS_510 = __VLS_pickFunctionalComponentCtx(__VLS_507, __VLS_509)!;
let __VLS_511!: __VLS_NormalizeEmits<typeof __VLS_510.emit>;
(__VLS_510.slots!).default;
}
(__VLS_505.slots!).default;
}
{
const __VLS_512 = __VLS_intrinsicElements["li"];
const __VLS_513 = __VLS_elementAsFunctionalComponent(__VLS_512);
const __VLS_514 = __VLS_513({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_513));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_512, typeof __VLS_514> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_515 = __VLS_pickFunctionalComponentCtx(__VLS_512, __VLS_514)!;
let __VLS_516!: __VLS_NormalizeEmits<typeof __VLS_515.emit>;
{
const __VLS_517 = __VLS_intrinsicElements["a"];
const __VLS_518 = __VLS_elementAsFunctionalComponent(__VLS_517);
const __VLS_519 = __VLS_518({ ...{}, class: ("bg-white"), href: ("/#/contact"), }, ...__VLS_functionalComponentArgsRest(__VLS_518));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_517, typeof __VLS_519> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), href: ("/#/contact"), });
const __VLS_520 = __VLS_pickFunctionalComponentCtx(__VLS_517, __VLS_519)!;
let __VLS_521!: __VLS_NormalizeEmits<typeof __VLS_520.emit>;
(__VLS_520.slots!).default;
}
(__VLS_515.slots!).default;
}
{
const __VLS_522 = __VLS_intrinsicElements["li"];
const __VLS_523 = __VLS_elementAsFunctionalComponent(__VLS_522);
const __VLS_524 = __VLS_523({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_523));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_522, typeof __VLS_524> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_525 = __VLS_pickFunctionalComponentCtx(__VLS_522, __VLS_524)!;
let __VLS_526!: __VLS_NormalizeEmits<typeof __VLS_525.emit>;
{
const __VLS_527 = __VLS_intrinsicElements["a"];
const __VLS_528 = __VLS_elementAsFunctionalComponent(__VLS_527);
const __VLS_529 = __VLS_528({ ...{}, class: ("bg-white"), href: ("/#/faq"), }, ...__VLS_functionalComponentArgsRest(__VLS_528));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_527, typeof __VLS_529> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), href: ("/#/faq"), });
const __VLS_530 = __VLS_pickFunctionalComponentCtx(__VLS_527, __VLS_529)!;
let __VLS_531!: __VLS_NormalizeEmits<typeof __VLS_530.emit>;
(__VLS_530.slots!).default;
}
(__VLS_525.slots!).default;
}
(__VLS_450.slots!).default;
}
(__VLS_445.slots!).default;
}
// @ts-ignore
[isMenuOpen,];
}
(__VLS_302.slots!).default;
}
(__VLS_297.slots!).default;
}
(__VLS_292.slots!).default;
}
