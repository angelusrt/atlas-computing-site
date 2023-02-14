type TextType = 'p' | 'h1' | 'h2' 

type TextColorName = 'text-button-white' | 'text-button-black' 
type TextTitleInfoName = 
  'text-info-title text-white' | 
  'text-info-title text-black' 
type TextSubtitleInfoName =
  'text-info-subtitle text-white' | 
  'text-info-subtitle text-black' 
type TextName = 
  'text-intro-title' | 
  'text-intro-subtitle' | 
  'text-footer-body' |
  'text-project-title' |
  'text-project-subtitle' |
  'text-project-body' |
  'text-footer-body' 

const textType = ['p', 'h1', 'h2']

interface iText {
  type: TextType,
  name ?: TextName | TextColorName | TextTitleInfoName | TextSubtitleInfoName,
  children: string
}

export{textType}
export type {
  iText, 
  TextName, 
  TextTitleInfoName, 
  TextSubtitleInfoName, 
  TextColorName, 
  TextType
}