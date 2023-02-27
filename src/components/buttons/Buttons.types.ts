import { TextName } from "../texts/Texts.types"

type ButtonName = 
  'button-index' |
  'button-white' |
  'button-black'
type ButtonType = 'h1' | 'h2' 

interface iButton {
  type: ButtonType,
  name: ButtonName,
  isTitle ?: boolean,
  textName ?: TextName, 
  text ?: string,
  children ?: any,
  func ?: any,
} 

interface iLink {
  text: string,
  href: string,
  isNewTab: boolean
} 

interface iNavButton {
  index: {
    text: string,
    href: string
  }[],
}

interface iNavButtonHelper {
  data: {text: string, href: string}[]
}
interface iItem {
  text: string, 
  href: string 
}

export type {iButton, iLink, iNavButton, iNavButtonHelper, iItem}