
// const buttonNameDic = {
//   'white': 'button-white', 
//   'black': 'button-black',
//   'h1': 'button-title',
//   'h2': 'button-subtitle',
// }

import { TextColorName } from "../texts/Texts.types"

// const textNameDic = {
//   'black':'text-button-white', 
//   'white':'text-button-black'
// }
const buttonTitles = [
  "button-title button-black", 
  "button-title button-white"
]

type ButtonName = 
  'button-title button-white' | 
  'button-subtitle button-white' | 
  'button-nav' | 
  'button-title button-black' | 
  'button-subtitle button-black'
type ButtonType = 'h1' | 'h2' 
type ButtonColorName = 'button-white' | 'button-black' 
type LinkName = 
  'button-link button-white' |
  'button-link button-black'

interface iButton {
  name: ButtonName | ButtonColorName,
  textName: TextColorName, 
  type: ButtonType,
  text ?: string,
  children ?: any,
  func ?: any,
} 

interface iLink {
  name: LinkName,
  textName: TextColorName,
  text: string,
  href: string,
  isNewTab: boolean
} 

export {buttonTitles}
export type {iButton, iLink}