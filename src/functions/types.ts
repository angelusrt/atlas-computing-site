type HTMLRef = React.MutableRefObject<HTMLElement>
type DivRef = React.MutableRefObject<HTMLDivElement>
type ButtonRef = React.MutableRefObject<HTMLButtonElement>
type SVGRef = React.MutableRefObject<SVGSVGElement> 

const bodyStyle = [
  'overflow: auto; height: auto;',
  'overflow: hidden; height: 100vh;' 
]

type OptionsType = {
  text: string,
  name: string
}[]

export {bodyStyle}
export type {
  HTMLRef,
  DivRef,
  ButtonRef,
  SVGRef,
  OptionsType,
}