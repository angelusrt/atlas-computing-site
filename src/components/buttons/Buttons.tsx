import { Text } from "../texts/Texts"
import "./buttons.css"

const textName = {
  'black':'text-button-white', 
  'white':'text-button-black'
}
const buttonName = {
  'white':'button-white', 
  'black':'button-black',
  'h1': 'button-title',
  'h2': ''
}

type buttonProps = {
  color: 'white' | 'black',
  type: 'h1' | 'h2',
  text: string,
  children ?: any,
  func ?: any
} 

function Button(props: buttonProps): JSX.Element{
  const name = (buttonName[props.color] + " " + buttonName[props.type])
  
  return(
    <button 
      className={name} 
      {...props.func}
    >
      <Text 
        name={textName[props.color]}
        type={props.type}
      >
        {props.text}
      </Text>
      {props.children}
    </button>
  )
}

type linkProps = {
  color: 'white' | 'black',
  text: string,
  href: string
} 

function Link(props:linkProps): JSX.Element{
  const name = buttonName[props.color]

  return(
    <a className={name} href={props.href}>
      <Text 
        name={textName[props.color]}
        type='h2'
      >
        {props.text}
      </Text>
    </a>
  )
}

export{Button, Link}