import { useEffect, useRef, useState } from "react"

import { useAnimateOnView } from "../../functions/transition"

import { ButtonType, LinkType, NavType } from "./Buttons.types"

import { Text } from "../texts/Texts"
import { DropdownBlock } from "../blocks/Blocks"
import { Icon } from "../icons/Icons"

import "./buttons.css"

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
  useAnimateOnView('.button-index', transIndex)
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
  const {href, isNewTab, text, ariaLabel} = prop

  useAnimateOnView('#footer .button-link', transLink)

  return(
    <a 
      className="button-link" 
      href={href} 
      target={isNewTab ? "_blank" : "_self"}
      rel="noreferrer"
      aria-label={ariaLabel}
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
      ariaLabel={item.text}
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
      ariaLabel="Menu"
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