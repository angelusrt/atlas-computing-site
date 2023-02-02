import { Text } from "../texts/Texts"
import "./buttons.css"

const textName = {
  'button-black':'text-button-white', 
  'button-white':'text-button-black'
}
type buttonProp = {
  name: 'button-white' | 'button-black',
  type: 'h1' | 'h2',
  text: string,
  children ?: any
} 

function Button(props: buttonProp): JSX.Element{
  return(
    <button className={props.name}>
      <Text 
        name={textName[props.name]}
        type={props.type}
      >
        {props.text}
      </Text>
      {props.children}
    </button>
  )
}

export{Button}