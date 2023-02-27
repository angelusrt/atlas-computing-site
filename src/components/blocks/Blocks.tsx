import React, { useEffect, useRef, useState } from "react"

import { useAnimateOnScroll } from "../../functions/transition"
import { useAnimateWithClass } from "../../functions/utils"
import { trans } from "../../functions/function.types"

import { Button } from "../buttons/Buttons"
import { Icon } from "../icons/Icons"
import { Text } from "../texts/Texts"

import { 
  iBlock,
  iDropdown,
  iProject,
} from "./Blocks.types"
import "./blocks.css"

const Block = (prop: iBlock) => {
  useAnimateOnScroll(
    '.block-project', 
    {...trans, start: 400, delayPerItem: 200}
  )
  useAnimateOnScroll(
    '.block-about', 
    {...trans, start: 400, delayPerItem: 200}
  )

  return(
    <div 
      ref={prop.blockRef} 
      className={prop.name} 
      style={prop.style}
    >
      {prop.children}
    </div>
  )
}

const ProjectBlock = (prop: iProject) => {
  const[isModal, setIsModal] = useState(false)
  const[isModalChanged, setIsModalChanged] = useState(false)

  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (ref.current && !isModal && isModalChanged){
      ref.current.classList.remove("block-project--expanded")  
      ref.current.classList.add("block-project--show")
    }
    else if (ref.current && isModal){
      ref.current.classList.remove("block-project--show") 
      ref.current.classList.add("block-project--expanded")  
      setIsModalChanged(true)
    }
  },[isModal, isModalChanged])

  useEffect(() => {
    const offset = document.getElementById("projects")?.offsetTop
    const bodyStyle = document.body.style

    if(isModal){
      bodyStyle.overflow = "hidden"
      bodyStyle.height = "100%"  

      window.scrollTo({behavior: "smooth", top: offset})
    } else {
      bodyStyle.overflow = "auto"
      bodyStyle.height = "auto"   
    }
  },[isModal])

  return(
    <React.Fragment>
      <Block blockRef={ref} name="block-project">
        <Icon name={prop.iconName}/>
        <Text 
          type="h1" 
          name="text-big"
          children={prop.title}
        />
        <Text 
          type="p" 
          name="text-thin-small"
          children={prop.subtitle}
        />
        <Text 
          type="p" 
          name="text-normal"
          children={prop.body}
        />
        <Button
          type="h2"
          name="button-white"
          func={{onClick: () => setIsModal((state: boolean) => !state)}}
          text="Ver mais"
          textName="text-bold-small"
        />
      </Block>
    </React.Fragment>
  )
}

const DropdownBlock = (prop: iDropdown) => {
  const [time , setTime] = useState<NodeJS.Timeout>()

  const ref = useRef<HTMLDivElement>(null!)

  useAnimateWithClass({
    classArray: [
      "block-dropdown--show", 
      "block-dropdown--none"
    ],
    isToggle: prop.toggle,
    ref, setTime, time
  })

  return (
    <Block blockRef={ref} name="block-dropdown">
      {prop.children}
    </Block>
  )
}

export {Block, ProjectBlock, DropdownBlock}