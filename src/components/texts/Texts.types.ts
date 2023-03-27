type TextNameType = (
  'text-title' |
  'text-big-title' |
  'text-big-subtitle' |
  'text-big' |
  'text-thin-small' |
  'text-bold-small' |
  'text-normal' |
  'text-thin' | 
  'text-normal-small'
)

type TextType = {
  children: string,
  type: 'p' | 'h1' | 'h2' ,
  textRef ?: React.LegacyRef<HTMLParagraphElement>,
  name ?: TextNameType
}

export type {
  TextType, TextNameType
}