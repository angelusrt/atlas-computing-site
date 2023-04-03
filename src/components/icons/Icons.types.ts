type RefSVGType = React.MutableRefObject<SVGSVGElement> | undefined 

type IconType = {
  name?: string,
  blockRef?: RefSVGType
}

type SVGIconType = {
  blockRef: RefSVGType
}

export type {IconType, SVGIconType}