"use client"

import { useRef } from "react"
import { add, remove } from "../../functions/utils"
import { ButtonRef } from "../../functions/types"
import { Block } from "../blocks/Blocks"
import { Icon } from "../icons/Icons"
import { H2 } from "../texts/Texts"
import "./buttons.css"

type ButtonName = (
  'button-nav' | 'button-white' | 'button-black' | 'button-transparent'
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
  <Block 
    name={"block-button"} 
    func={{onClick: prop.func}}
  >
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

  const time = useRef<NodeJS.Timeout>(null!)
  const dropdownRef = useRef<HTMLElement>(null!)
  
  function onEnter() {
    if(time.current) clearTimeout(time.current)
    
    add(blockRef, "--hover")
    time.current = setTimeout(() => add(dropdownRef, "--show"), 10)   
  }

  function onExit() {
    if(time.current) clearTimeout(time.current)
  
    remove(dropdownRef, "--show")
    time.current = setTimeout(() => remove(blockRef, "--hover"), 350)
  }
  
  function getFunc() {
    if(isMobile)
      return { onClick: onEnter, onMouseLeave: onExit }
    else
      return { onMouseEnter: onEnter, onMouseLeave: onExit } 
  }

  return (
    <Button 
      blockRef={blockRef} 
      name="button-nav" 
      ariaLabel="Menu" 
      func={getFunc()}
    >
      <Block blockRef={dropdownRef} name="block-dropdown">
        {children}
      </Block>
      <Icon name="Menu"/>
    </Button>
  )
}

export{Button, Link, NavButton, BlockButton}
export type {ButtonType, LinkType, NavType, BlockButtonType}