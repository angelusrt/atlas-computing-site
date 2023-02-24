import React, { useEffect, useRef, useState } from "react"

import { useAnimateOnScroll } from "../../functions/transition"
import { useAnimateWithClass } from "../../functions/utils"
import { trans } from "../../functions/function.types"

import { Button } from "../buttons/Buttons"
import { Icon } from "../icons/Icons"
import { Text } from "../texts/Texts"

import { 
  dropdownNames, 
  iBlock,
  iDroprown,
  iInfoBlock,
  iProject,
  iProjectModal,
  projectModalNames,
} from "./Blocks.types"
import "./blocks.css"

const Block = (prop: iBlock) => {
  useAnimateOnScroll(
    '.block-info', 
    {...trans, start: 800, delayPerItem: 200}
  )
  useAnimateOnScroll(
    '.block-project', 
    {...trans, start: 400, delayPerItem: 200}
  )
  useAnimateOnScroll(
    '.block-horizontal .block-wrapper', 
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

const InfoBlock = (prop: iInfoBlock) => (
  <Block name="block-info" blockRef={prop.blockRef}>
    <Text 
      type="h2" 
      name={prop.titleName}
      children={prop.title}
    />
    <Text 
      type="h1" 
      name={prop.subtitleName}
      children={prop.subtitle}
    />
  </Block>
)

const ProjectModalBlock = (prop: iProjectModal) => {
  const [time , setTime] = useState<NodeJS.Timeout>()

  const ref = useRef<HTMLDivElement>(null!)
  
  useAnimateWithClass({
    classArray: projectModalNames,
    isToggle: prop.isModal,
    ref, setTime, time
  })

  useEffect(() => {
    const offset = document.getElementById("projects")?.offsetTop
    const bodyStyle = document.body.style

    if(prop.isModal){
      bodyStyle.overflow = "hidden"
      bodyStyle.height = "100%"  

      window.scrollTo({behavior: "smooth", top: offset})
    } else {
      bodyStyle.overflow = "auto"
      bodyStyle.height = "auto"   
    }
  },[prop.isModal])

  return(
    <Block blockRef={ref} name="block-project-modal">
      <Button 
        type="h2" 
        name="button-icon button-white"
        func={{ onClick: prop.onFunc }}
        children={<Icon name="Arrow"/>}
      />
      <Block 
        name="block-project-image"
        children={<Icon name={prop.iconName}/>}
      />
      <Text 
        type="h1" 
        name="text-project-title"
        children={prop.title}
      />
      <Text 
        type="p" 
        name="text-project-subtitle"
        children={prop.subtitle}
      />
      <Text 
        type="p" 
        name="text-project-body"
        children={prop.body}
      />
    </Block>
  ) 
}

const ProjectBlock = (prop: iProject) => {
  const[isModal, setIsModal] = useState(false)
  const[isModalChanged, setIsModalChanged] = useState(false)

  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (ref.current && !isModal && isModalChanged){
      ref.current.classList.add("block-project--show")
    }
    else if (ref.current && isModal){
      ref.current.classList.remove("block-project--show")  
      setIsModalChanged(true)
    }
  },[isModal, isModalChanged])

  return(
    <React.Fragment>
      <Block blockRef={ref} name="block-project">
        <Block 
          name="block-project-image"
          children={<Icon name={prop.iconName}/>}
        />
        <Text 
          type="h1" 
          name="text-project-title"
          children={prop.title}
        />
        <Text 
          type="p" 
          name="text-project-subtitle"
          children={prop.subtitle}
        />
        <Button
          type="h2"
          name="button-icon button-white"
          func={{onClick: () => setIsModal(true)}}
          text="Ver mais"
          textName="text-body-button"
          // children={<Icon name="Arrow"/>}
        />
      </Block>
      <ProjectModalBlock
        title={prop.title}
        subtitle={prop.subtitle}
        body={prop.body}
        iconName={prop.iconName}
        isModal={isModal}
        onFunc={() => setIsModal(false)}
      />
    </React.Fragment>
  )
}

const DropdownBlock = (prop: iDroprown) => {
  const [time , setTime] = useState<NodeJS.Timeout>()

  const ref = useRef<HTMLDivElement>(null!)

  useAnimateWithClass({
    classArray: dropdownNames,
    isToggle: prop.toggle,
    ref, setTime, time
  })

  return (
    <Block blockRef={ref} name="block-dropdown">
      {prop.children}
    </Block>
  )
}

export {Block, InfoBlock, ProjectBlock, DropdownBlock}