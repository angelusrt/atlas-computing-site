type TextType = 'p' | 'h1' | 'h2' 

type TextNav = 'text-nav'
type TextTitleInfoName = 
  'text-info-title text-white' | 
  'text-info-title text-black' 
type TextSubtitleInfoName =
  'text-info-subtitle text-white' | 
  'text-info-subtitle text-black'
type TextBodyButtonName = 'text-body-button'
type TextName = 
  'text-intro-title' | 
  'text-intro-subtitle' | 
  'text-project-title' |
  'text-project-subtitle' |
  'text-project-body' |
  'text-footer-body' |
  'text-enter-title' | 
  'text-enter-subtitle' |
  'text-title'

const textType = ['p', 'h1', 'h2']

interface iText {
  type: TextType,
  name ?: 
    TextName | 
    TextTitleInfoName | 
    TextSubtitleInfoName | 
    TextNav |
    TextBodyButtonName,
  children: string
}

export{textType}
export type {
  iText, 
  TextName, 
  TextTitleInfoName, 
  TextSubtitleInfoName, 
  TextBodyButtonName,
  TextType,
  TextNav
}