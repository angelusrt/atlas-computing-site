import { HTMLRef, RatingType } from "../../functions/function.types"

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

type NavType = {
  blockRef: HTMLRef,
  lastPageDiscovered: number,
  active: number,
  pageMap: Record<number, number>,
  setPageActive: (s: number) => void
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
  DropdownType,
  ThemeType,
  NavType,
}