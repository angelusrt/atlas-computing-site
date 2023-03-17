type RefSVGType = React.MutableRefObject<SVGSVGElement> | undefined 

type IconType = {
  name: string,
  elRef?: RefSVGType
}

type SVGIconType = {
  elRef: RefSVGType
}

export type {IconType, SVGIconType}