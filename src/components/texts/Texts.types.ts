type TextName = 
  'text-title' |
  'text-big-title' |
  'text-big-subtitle' |
  'text-big' |
  'text-thin-small' |
  'text-bold-small' |
  'text-normal'
type TextType = 'p' | 'h1' | 'h2' 

interface iText {
  textRef ?: React.LegacyRef<HTMLParagraphElement>,
  type: TextType,
  name ?: TextName
  children: string
}

export type {
  iText, TextName, TextType
}