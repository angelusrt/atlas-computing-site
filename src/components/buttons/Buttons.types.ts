import { TextNameType } from "../texts/Texts.types"

type ButtonName = (
  'button-index' |
  'button-white' |
  'button-black'
)

type ButtonType = {
  type: 'h1' | 'h2',
  ariaLabel: string,
  name: ButtonName,
  blockRef ?: React.LegacyRef<HTMLButtonElement>,
  textName ?: TextNameType, 
  text ?: string,
  children ?: any,
  func ?: any,
} 

type LinkType = {
  text: string,
  href: string,
  isNewTab: boolean,
  ariaLabel: string
} 

type NavType = {
  index: {
    text: string,
    href: string
  }[],
  isMobile: boolean
}

export type {ButtonType, LinkType, NavType}