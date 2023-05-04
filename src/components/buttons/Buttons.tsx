"use client"

import { useEffect, useRef, useState } from "react"
import { add, remove } from "../../functions/utils"
import { ButtonRef } from "../../functions/types"
import { Block } from "../blocks/Blocks"
import { Icon } from "../icons/Icons"
import { H2 } from "../texts/Texts"
import "./buttons.css"

type ButtonName = (
  'button-index' | 'button-white' | 'button-black' | 'button-transparent'
)


type ButtonType = {
  name: ButtonName,
  isIcon ?: boolean,
  ariaLabel ?: string,
  blockRef ?: ButtonRef,
  text ?: string,
  children ?: any,
  func ?: any,
} 

const Button = (prop: ButtonType) => (
  <button 
    type="button"
    ref={prop.blockRef} 
    className={prop.name || ""} 
    aria-label={prop.ariaLabel || prop.text}
    {...prop.func}
  >
    {prop.text && <H2 name="text-bold-small">{prop.text}</H2>}
    {prop.isIcon && <Icon name="Arrow"/>}
    {prop.children}
  </button>
)


type LinkType = {
  text: string,
  href: string,
  isNewTab: boolean
} 

const Link = (prop: LinkType) => (
  <a 
    className="button-link" 
    href={prop.href} 
    target={prop.isNewTab ? "_blank" : "_self"}
    rel="noreferrer"
    aria-label={prop.text}
  >
    <H2>{prop.text}</H2>
  </a>
)


type BlockButtonType = {
  text: string, 
  func: () => void
}

const BlockButton = (prop: BlockButtonType) => (
  <Block name={"block-button"} func={{onClick: prop.func}}>
    <H2>{prop.text}</H2>
  </Block>
)


type NavType = {
  blockRef: ButtonRef,
  children: any,
  isMobile: boolean,
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
    <Button blockRef={blockRef} name="button-index" ariaLabel="Menu" func={getFunc()}>
      <Icon name="Menu"/>
      <Block blockRef={dropdownRef} name="block-dropdown">
        {children}
      </Block>
    </Button>
  )
}

export{Button, Link, NavButton, BlockButton}
export type {ButtonType, LinkType, NavType, BlockButtonType}