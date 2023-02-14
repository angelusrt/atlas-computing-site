const iconName = [
  'Arrow', 'Dropdown', 'Recife', 
  'Cables', 'ReadingFlow', 'Database', 
  'Network', 'ColumnFirst', 'ColumnSecond'
]

type IconName = 
  'Arrow' | 'Dropdown' | 'Recife' | 
  'Cables' | 'ReadingFlow' | 'Database' | 
  'Network' | 'ColumnFirst' | 'ColumnSecond'

type RefSVG = React.MutableRefObject<SVGSVGElement> | undefined 

interface iIcon {
  name:  IconName | string,
  elRef?: RefSVG
}

interface iSVGIcon{
  elRef: RefSVG
}

export {iconName}
export type {iIcon, RefSVG, iSVGIcon}