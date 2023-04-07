import { ButtonRef } from "../../functions/function.types"
import { TextNameType } from "../texts/Texts.types"

type ButtonName = (
  'button-index' |
  'button-white' |
  'button-black' |
  'button-transparent'
)

type ButtonType = {
  type: 'h1' | 'h2',
  ariaLabel: string,
  name: ButtonName,
  blockRef ?: ButtonRef,
  textName ?: TextNameType, 
  text ?: string,
  children ?: any,
  func ?: any,
} 

type LinkType = {
  text: string,
  href: string,
  isNewTab: boolean
} 

type NavType = {
  blockRef: ButtonRef,
  children: any,
  isMobile: boolean,
}

type BlockButtonType = {
  text: string, 
  func: () => void
}

export type {ButtonType, LinkType, NavType, BlockButtonType}