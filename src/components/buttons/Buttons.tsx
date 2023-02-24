import { useRef, useState } from "react"

import { useAnimateOnScroll } from "../../functions/transition"
import { trans } from "../../functions/function.types"

import { iButton, iItem, iLink, iNavButton, iNavButtonHelper } from "./Buttons.types"

import { Text } from "../texts/Texts"
import { DropdownBlock } from "../blocks/Blocks"
import { Icon } from "../icons/Icons"

import data from "../../data.json"
import "./buttons.css"

const transButton = {...trans, start: 400}
const transIntro = {...trans, start: 600}
const transIndex = {...trans, start: 1500}

const Button = (prop: iButton) => {
  const ref = useRef<HTMLButtonElement>(null!)
  
  useAnimateOnScroll('.button-text', trans)
  useAnimateOnScroll( '.button-icon', transButton)
  useAnimateOnScroll('.button-index', transIndex)
  useAnimateOnScroll('.button-intro', transIntro)

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
      className={prop.name} 
      href={prop.href} 
      target={prop.isNewTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <Text type='h2'>
        {prop.text}
      </Text>
    </a>
  )
}

const navButtonHelper = (prop: iNavButtonHelper) => (
  prop.data.map((item: iItem, index: number) =>
    <Link
      key={index}
      isNewTab={false}
      name={prop.name}
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
      textName="text-nav"
      text={data.nav.buttonNames[1]}
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
          prop.name === "button-nav" ?
          navButtonHelper({
            data: data.index, 
            name: "button-link button-white"
          }):
          navButtonHelper({
            data: data.enterIndex, 
            name: "button-link button-black"
          })
      }/>
    </Button>
  )
}

export{Button, Link, NavButton}