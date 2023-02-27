import { useRef, useState } from "react"

import { useAnimateOnScroll } from "../../functions/transition"
import { trans } from "../../functions/function.types"

import { iButton, iItem, iLink, iNavButton, iNavButtonHelper } from "./Buttons.types"

import { Text } from "../texts/Texts"
import { DropdownBlock } from "../blocks/Blocks"
import { Icon } from "../icons/Icons"

import "./buttons.css"

const transButton = {...trans, start: 400}
const transIndex = {...trans, start: 1000}

const Button = (prop: iButton) => {
  const ref = useRef<HTMLButtonElement>(null!)

  useAnimateOnScroll('.button-black', transButton)
  useAnimateOnScroll('.button-white', transButton)
  useAnimateOnScroll('.button-index', transIndex)

  return(
    <button 
      ref={ref}
      className={prop.name} 
      {...prop.func}
    >
      {
        prop.text &&
        <Text 
          name={prop.textName}
          type={prop.type}
        >
          {prop.text}
        </Text>
      }
      {prop.children}
    </button>
  )
}

const Link = (prop: iLink) => {
  useAnimateOnScroll(
    '#footer .button-link', 
    {...trans, delayPerItem: 200}
  )

  return(
    <a 
      className="button-link" 
      href={prop.href} 
      target={prop.isNewTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <Text type='h2'>{prop.text}</Text>
    </a>
  )
}

const navButtonHelper = (prop: iNavButtonHelper) => (
  prop.data.map((item: iItem, index: number) =>
    <Link
      key={index}
      isNewTab={false}
      href={item.href}
      text={item.text}
    />
  )
)

const NavButton = (prop: iNavButton) => {
  const [isToggle, setToggle] = useState(false)

  return (
    <Button
      type='h2'
      name="button-index"
      textName="text-bold-small"
      func={{ 
        onTouchStart: () => setToggle(true),
        onTouchEnd: () => setToggle(false),
        onMouseEnter: () => setToggle(true),
        onMouseLeave: () => setToggle(false)
      }}
    >
      <Icon name="Dropdown"/>
      <DropdownBlock 
        toggle={isToggle}
        children={
          navButtonHelper({
            data: prop.index
          })
      }/>
    </Button>
  )
}

export{Button, Link, NavButton}