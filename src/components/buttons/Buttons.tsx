import { useEffect, useRef } from "react"
import { transition, useAnimateOnScroll } from "../../functions/transition"
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
  'h2': 'button-subtitle'
}

type buttonProps = {
  color: 'white' | 'black',
  type: 'h1' | 'h2',
  text ?: string,
  children ?: any,
  func ?: any,
  name ?: 'button-nav'
} 

function Button(props: buttonProps): JSX.Element{
  const ref = useRef<HTMLButtonElement>(null!)
  const name = `
    ${props.name ? props.name : buttonName[props.type]} 
    ${buttonName[props.color]} 
  `
  
  useAnimateOnScroll(
    '.button-title', 
    transition
  )
  useAnimateOnScroll(
    '.button-subtitle', 
    {...transition, delayPerItem: 200}
  )
  useAnimateOnScroll(
    '.button-nav', 
    {...transition, start: 1500}
  )

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      window.scrollTo({behavior: "smooth", top: e.pageY - 60})
    }

    if(buttonName[props.type] === "button-title")
      ref.current.addEventListener("click", onClick)

    return () => ref.current.removeEventListener("click", onClick)
  }, [props.type])

  return(
    <button 
      ref={ref}
      className={name} 
      {...props.func}
    >
      {
        props.text &&
        <Text 
          name={textName[props.color]}
          type={props.type}
        >
          {props.text}
        </Text>
      }
      {props.children}
    </button>
  )
}

type linkProps = {
  color: 'white' | 'black',
  text: string,
  href: string,
  isNewTab: boolean
} 

function Link(props:linkProps): JSX.Element{
  const name = buttonName[props.color] + " button-link"

  useAnimateOnScroll(
    '#footer .button-link', 
    {...transition, delayPerItem: 200}
  )

  return(
    <a 
      className={name} 
      href={props.href} 
      target={props.isNewTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
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