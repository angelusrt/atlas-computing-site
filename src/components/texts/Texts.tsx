import "./texts.css"

type TextNameType = (
  'title' |
  'title-big' |
  'subtitle-big' |
  'text-big' |
  'text-thin-small' |
  'text-bold-small' |
  'text-normal' |
  'text-thin' | 
  'text-normal-small'
)

type TextType = {
  children: string,
  textRef ?: React.LegacyRef<HTMLParagraphElement>,
  name ?: TextNameType
}

const H1 = (prop: TextType) => (
  <h1 ref={prop.textRef} className={prop.name}>{prop.children}</h1>
)

const H2 = (prop: TextType) => (
  <h2 ref={prop.textRef} className={prop.name}>{prop.children}</h2>
) 

const P = (prop: TextType) => (
  <p ref={prop.textRef} className={prop.name}>{prop.children}</p>
)

export {H1, H2, P}
export type {TextType, TextNameType}