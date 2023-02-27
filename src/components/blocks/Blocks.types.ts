interface iBlock {
  name: string,
  children?: any,
  style ?: React.CSSProperties,
  blockRef ?: React.LegacyRef<HTMLDivElement>
}

type IconName = 'ReadingFlow' | 'Database' | 'Network'

interface iProject {
  iconName: IconName | string
  title: string,
  subtitle: string,
  body: string
}

interface iDropdown {
  children: any,
  toggle: boolean
}

export type { 
  iBlock, 
  iProject, 
  iDropdown
}