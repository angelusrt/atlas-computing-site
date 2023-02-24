import { TextBodyButtonName, TextNav } from "../texts/Texts.types"

const buttonTitles = [
  "button-title button-black", 
  "button-title button-white"
]

type ButtonNav = 
  'button-nav' | 
  'button-enter-nav'
type ButtonName = 
  'button-text button-white' | 
  'button-icon button-white' | 
  'button-text button-black' | 
  'button-icon button-black' |
  'button-intro button-icon button-black' |
  'button-index'
type ButtonType = 'h1' | 'h2' 
type LinkName = 
  'button-link button-white' |
  'button-link button-black'

interface iButton {
  type: ButtonType,
  name: ButtonName,
  isTitle ?: boolean,
  textName ?: TextNav | TextBodyButtonName, 
  text ?: string,
  children ?: any,
  func ?: any,
} 

interface iLink {
  name: LinkName,
  text: string,
  href: string,
  isNewTab: boolean
} 

interface iNavButton {
  name: ButtonNav,
  textName: TextNav,
}

interface iNavButtonHelper {
  data: {text: string, href: string}[],
  name: LinkName,
}
interface iItem {
  text: string, 
  href: string 
}
export {buttonTitles}
export type {iButton, iLink, iNavButton, iNavButtonHelper, iItem}