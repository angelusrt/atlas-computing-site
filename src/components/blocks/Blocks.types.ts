import { RatingType } from "../../functions/function.types"

type CanvasNameType = "canvas-globe" | "canvas-values"

type CanvasType = { 
  isMobile: boolean,
  name: CanvasNameType
}

type positionType = Record<CanvasNameType, [number, number, number]>
type intensityType = Record<CanvasNameType, number>

const canvasPosDic: positionType = {
  "canvas-globe": [-50, 60, 100],
  "canvas-values": [250, 50, 50]
}

const canvasIntensityDic: intensityType = {
  "canvas-globe": 8,
  "canvas-values": 6
}

type ExpandedType = 'unset' | 'expand-enter' | 'expand-show' | 'expand-out'

type StyleType = {
  isAbout: boolean,
  parentTop: number | undefined,
  offsetTop: number, 
  offsetLeft: number, 
  scrollY: number,
  offsetWidth?: number, 
  offsetHeight?: number,
  ref?: React.MutableRefObject<HTMLDivElement>
}

type BlockType = {
  name: string,
  type: "div" | "section" | "form",
  children?: any,
  style ?: React.CSSProperties,
  blockRef ?: React.LegacyRef<HTMLElement>,
  func ?: any
}

type BlockErrorType = "BLOCK_DOESNT_EXIST"

type ProjectType = {
  iconName: string
  title: string,
  subtitle: string,
  isMobile: boolean,
  onFunc: () => void,
  setStyle: (style: StyleType) => void
}

type ProjectExpandedType = {
  iconName: string
  title: string,
  subtitle: string,
  body: string,
  onFunc: () => void,
  blockRef: React.LegacyRef<HTMLDivElement>
}

type DropdownType = {
  children: any,
  toggle: boolean
}

type ThemeType = "block-white" | "block-black"

type ButtonThemeType = "button-black" | "button-white"

type ButtonThemeDicType = Record<ThemeType, ButtonThemeType>

const themeDic: ButtonThemeDicType = {
  "block-white": "button-black",
  "block-black": "button-white"
}
const inverseThemeDic: ButtonThemeDicType = {
  "block-white": "button-white",
  "block-black": "button-black"
}

type IntroType = {
  title: string,
  subtitle: string,
  body: string, 
  iconName: string
  displayActive: number, 
  getIsDisplay: (e: number) => boolean,
  decrement: () => void,
  increment: () => void
}

type InfoType = {
  title: string,
  subtitle: string,
  body: string,
  displayActive: number,
  getIsDisplay: (e: number) => boolean,
  decrement: () => void,
  increment: () => void
}

type NavType = {
  index: number,
  pageActive: number,
  pageFirstEntry: number,
  sectionMap: Record<number, number>,
  emojiAriaLabels: string[],
  data: {
    text: string,
    href: string,
    page: number,
    theme: string
  }[],
  setPageActive: (s: number) => void
  setRating: (s : RatingType) => void
}

type InputType = {
  text: string,
  name: string,
  type: React.HTMLInputTypeAttribute,
}

type OptionListType = {
  text: string,
  name: string
}[]

type SelectType = {
  text: string,
  name: string,
  isMobile: boolean,
  optionList: OptionListType,
  setStyle: (s: StyleType) => void,
  setIsActive: () => void,
}

type SelectExpandedType = {
  text: string,
  isDisplay: boolean,
  blockRef: React.MutableRefObject<HTMLElement>,
  optionList: OptionListType,
  setSelectText: (id: number) => void
  setIsActive: () => void,
}

export{
  canvasPosDic, 
  canvasIntensityDic, 
  themeDic, 
  inverseThemeDic
}

export type { 
  CanvasType,
  BlockType, 
  BlockErrorType,
  StyleType,
  ProjectType, 
  ProjectExpandedType,
  DropdownType,
  ExpandedType,
  IntroType,
  InfoType,
  ThemeType,
  NavType,
  InputType,
  OptionListType,
  SelectType,
  SelectExpandedType
}