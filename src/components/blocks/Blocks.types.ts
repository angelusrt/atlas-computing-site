import { TextSubtitleInfoName, TextTitleInfoName } from "../texts/Texts.types"

interface iBlock {
  name: string,
  children?: any,
  style ?: React.CSSProperties,
  blockRef ?: React.LegacyRef<HTMLDivElement>
}

interface iInfoBlock {
  titleName: TextTitleInfoName
  title: string,
  subtitleName: TextSubtitleInfoName
  subtitle: string
}

const projectModalNames: [string, string] = [
  "block-modal-wrapper--show", 
  "block-modal-wrapper--none"
]

type IconName = 'ReadingFlow' | 'Database' | 'Network'

interface iProject {
  iconName: IconName | string
  title: string,
  subtitle: string,
  body: string
}

interface iProjectModal extends iProject {
  isModal: boolean,
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface iProjectWrapper {
  title: string,
  subtitle: string,
  isButton?: boolean,
  body?: string,
  onFunc?: () => void
}

interface iDroprown {
  children: any,
  toggle: boolean
}

const dropdownNames: [string, string] = [
  "block-dropdown--show", 
  "block-dropdown--none"
]

export{ projectModalNames, dropdownNames }
export type { 
  iBlock, 
  iInfoBlock, 
  iProject, 
  iProjectModal, 
  iProjectWrapper, 
  iDroprown
}