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
  children?: any,
  style ?: React.CSSProperties,
  blockRef ?: React.LegacyRef<HTMLDivElement>,
  func ?: any
}

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

export type { 
  BlockType, 
  StyleType,
  ProjectType, 
  ProjectExpandedType,
  DropdownType,
  ExpandedType
}