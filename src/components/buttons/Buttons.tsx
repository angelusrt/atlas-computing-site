import { useEffect, useRef, useState } from "react"

import { useAnimateOnView } from "../../functions/transition"
import { trans } from "../../functions/function.types"

import { ButtonType, LinkType, NavType } from "./Buttons.types"

import { Text } from "../texts/Texts"
import { DropdownBlock } from "../blocks/Blocks"
import { Icon } from "../icons/Icons"

import "./buttons.css"

const transButton = {...trans, start: 400}
const transIndex = {...trans, start: 1000}

const Button = (prop: ButtonType) => {
  const {
    blockRef, name, type, children, func, text, textName
  } = prop

  useAnimateOnView('.button-black', transButton)
  useAnimateOnView('.button-white', transButton)
  useAnimateOnView('.button-index', transIndex)

  return(
    <button ref={blockRef} className={name} {...func}>
      {
        text &&
        <Text 
          name={textName}
          type={type}
          children={text}
        />
      }
      {children}
    </button>
  )
}

const Link = (prop: LinkType) => {
  const {href, isNewTab, text} = prop

  useAnimateOnView(
    '#footer .button-link', 
    {...trans, delayPerItem: 200}
  )

  return(
    <a 
      className="button-link" 
      href={href} 
      target={isNewTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <Text 
        type='h2' 
        children={text}
      />
    </a>
  )
}

const NavButton = (prop: NavType) => {
  const {index, isMobile} = prop

  const [isToggle, setToggle] = useState(false)
  
  const ref = useRef<HTMLButtonElement>(null!)

  const Links = index.map((item, id) =>
    <Link
      key={id}
      isNewTab={false}
      href={item.href}
      text={item.text}
    />
  )

  function getFunc() {
    if(isMobile)
      return { 
        onClick: () => setToggle(s => !s),
        onMouseLeave: () => setToggle(false)
      }
    else
      return { 
        onMouseEnter: () => setToggle(true),
        onMouseLeave: () => setToggle(false)
      } 
  }

  useEffect(() => {
    const button = ref.current.classList

    if(isToggle)
      button.add("button-index--hover")
    else
      button.remove("button-index--hover")
  }, [isToggle])

  return (
    <Button
      blockRef={ref} 
      type='h2'
      name="button-index"
      textName="text-bold-small"
      func={getFunc()}
    >
      <Icon name="Menu"/>
      <DropdownBlock 
        toggle={isToggle}
        children={Links}
      />
    </Button>
  )
}

export{Button, Link, NavButton}