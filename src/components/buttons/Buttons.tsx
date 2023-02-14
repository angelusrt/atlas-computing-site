import { useEffect, useRef, useState } from "react"

import { useAnimateOnScroll } from "../../functions/transition"
import { trans } from "../../functions/function.types"

import { buttonTitles, iButton, iLink } from "./Buttons.types"

import { Text } from "../texts/Texts"
import { DropdownBlock } from "../blocks/Blocks"
import { Icon } from "../icons/Icons"

import data from "../../data.json"
import "./buttons.css"

const Button = (prop: iButton) => {
  const ref = useRef<HTMLButtonElement>(null!)
  
  useAnimateOnScroll('.button-title', trans)
  useAnimateOnScroll(
    '.button-subtitle', {...trans, start: 400}
  )
  useAnimateOnScroll(
    '.button-nav', {...trans, start: 1500}
  )

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      window.scrollTo({behavior: "smooth", top: e.pageY - 60})
    }

    const current = ref.current

    if(buttonTitles.includes(prop.name))
      current.addEventListener("click", onClick)

    return () => current.removeEventListener("click", onClick)
  }, [prop.type, prop.name])

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
      <Text 
        name={prop.textName}
        type='h2'
      >
        {prop.text}
      </Text>
    </a>
  )
}

const NavButton = () => {
  const [isToggle, setToggle] = useState(false)

  return (
    <Button
      type='h2'
      name="button-nav"
      textName="text-button-black"
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
        children={ data.index.map(
          (item, index) => 
          <Link
            key={index}
            isNewTab={false}
            name="button-link button-white"
            textName="text-button-black"
            href={item.href}
            text={item.text}
          />
        )}
      />
    </Button>

  )
}

export{Button, Link, NavButton}