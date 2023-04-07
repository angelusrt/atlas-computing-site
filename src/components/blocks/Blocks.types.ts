import { HTMLRef } from "../../functions/function.types"

type BlockErrorType = "BLOCK_DOESNT_EXIST"

type CanvasNameType = "canvas-globe" | "canvas-values"

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

type BlockType = {
  name: string,
  type: "div" | "section" | "form",
  children?: any,
  style ?: React.CSSProperties,
  blockRef ?: React.LegacyRef<HTMLElement>,
  func ?: any
}

type CanvasType = { 
  isMobile: boolean,
  name: CanvasNameType
}

type NavType = {
  blockRef: HTMLRef,
  lastPageDiscovered: number,
  active: number,
  pageMap: Record<number, number>,
  setPageActive: (s: number) => void
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

export{canvasPosDic, canvasIntensityDic }

export type { 
  CanvasType,
  BlockType, 
  BlockErrorType,
  StyleType,
  NavType,
}