import { useEffect, useRef, useState } from "react"

import { useAnimateOnView } from "../../functions/transition"

import { BlockButtonType, ButtonType, LinkType, NavType } from "./Buttons.types"

import { Text } from "../texts/Texts"
import { Block } from "../blocks/Blocks"
import { Icon } from "../icons/Icons"

import "./buttons.css"
import { add, remove } from "../../functions/utils"

const transLink = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 200,
  timeout: 200,
  start: 0,
  index: 0,
}
const transButton = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 0,
  timeout: 200,
  start: 400,
  index: 0,
}
const transIndex = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 0,
  timeout: 200,
  start: 600,
  index: 0,
}

const Button = (prop: ButtonType) => {
  const {
    blockRef, name, type, children, func, text, textName, ariaLabel
  } = prop

  useAnimateOnView('.button-black', transButton)
  useAnimateOnView('.button-white', transButton)
  // useAnimateOnView('.button-index', transIndex)
  useAnimateOnView('.button-transparent', transIndex)

  return(
    <button 
      ref={blockRef} 
      className={name || ""} 
      aria-label={ariaLabel}
      type="button"
      {...func}
    >
      {
        text &&
        <Text name={textName} type={type} children={text}/>
      }
      {children}
    </button>
  )
}

const Link = (prop: LinkType) => {
  const {href, isNewTab, text} = prop

  useAnimateOnView('#footer .button-link', transLink)

  return(
    <a 
      className="button-link" 
      href={href} 
      target={isNewTab ? "_blank" : "_self"}
      rel="noreferrer"
      aria-label={text}
    >
      <Text type='h2' children={text}/>
    </a>
  )
}

const NavButton = (prop: NavType) => {
  const {blockRef, children, isMobile } = prop

  const [isToggle, setToggle] = useState(false)
  const [time , setTime] = useState<NodeJS.Timeout>()

  const dropdownRef = useRef<HTMLElement>(null!)

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
    const button = blockRef.current
    const dropdown = dropdownRef.current

    if(time) clearTimeout(time)

    if(isToggle){
      add(button.classList, "--hover")

      remove(dropdown.classList, "--none")
      setTime(setTimeout(() => add(dropdown.classList, "--show"), 10))
    }
    else{
      remove(button.classList, "--hover")

      remove(dropdown.classList, "--show")
      setTime(setTimeout(() => add(dropdown.classList, "--none"), 1000))
    }
  }, [isToggle])

  return (
    <Button
      blockRef={blockRef} 
      type='h2'
      name="button-index"
      textName="text-bold-small"
      ariaLabel="Menu"
      func={getFunc()}
    >
      <Icon name="Menu"/>
      <Block type="div" blockRef={dropdownRef} name="block-dropdown">
        {children}
      </Block>
    </Button>
  )
}

const BlockButton = (prop: BlockButtonType) => {
  const {text, func} = prop

  return (
    <Block type="div" name={"block-button"} func={{onClick: func}}>
      <Text type="h2">{text}</Text>
    </Block>
  )
}

export{Button, Link, NavButton, BlockButton}