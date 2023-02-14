import React, { useEffect, useRef, useState } from "react"

import { useAnimateOnScroll } from "../../functions/transition"
import { useAnimateWithClass } from "../../functions/utils"
import { trans } from "../../functions/function.types"

import { Button, NavButton } from "../buttons/Buttons"
import { Icon } from "../icons/Icons"
import { Text } from "../texts/Texts"

import { 
  dropdownNames, 
  iBlock,
  iDroprown,
  iInfoBlock,
  iProject,
  iProjectModal,
  iProjectWrapper,
  projectModalNames,
} from "./Blocks.types"

import data from "../../data.json"
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

const Nav = () => (
  <nav>
    <Button
      type='h1'
      name='button-title button-white'
      textName="text-button-black"
      text={data.nav.buttonNames[0]}
    />
    <Block name="block-wrapper">
      <NavButton/>
      <Button
        type='h2'
        name="button-subtitle button-black"
        textName="text-button-white"
        text={data.nav.buttonNames[2]}
      >
        <Icon name="Arrow"/>
      </Button>
    </Block>
  </nav>
)

const InfoBlock = (prop: iInfoBlock) => (
  <Block name="block-info">
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

const ProjectWrapperBlock = (prop: iProjectWrapper) => (
  <Block name="block-wrapper">
    {
      prop.isButton &&
      <Button 
        type="h2" 
        name="button-subtitle button-white"
        textName="text-button-black"
        func={{
          onClick: prop.onFunc
        }}
      >
        <Icon name="Arrow"/>
      </Button>
    }
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
    {
      prop.body &&
      <Text 
        type="p" 
        name="text-project-body"
        children={prop.body}
      />
    }
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
    <Block blockRef={ref} name="block-modal-wrapper">
      <Block name="block-project-modal">
        <Block name="block-project-image">
          <Icon name={prop.iconName}/>
        </Block>
        <ProjectWrapperBlock
          title={prop.title}
          subtitle={prop.subtitle}
          body={prop.body}
          isButton={true}
          onFunc={() => prop.setIsModal(false)}
        />
      </Block>
    </Block>
  ) 
}

const ProjectBlock = (prop: iProject) => {
  const[isModal, setIsModal] = useState(false)

  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const onClick = () => {
      ref.current.classList.remove("block-project--show")
      setIsModal(true)
    }
    
    const current = ref.current

    if(current)
      current.addEventListener("click", onClick)
    
    return () => current.removeEventListener("click", onClick)
  },[])

  useEffect(() => {
    if(ref.current && isModal)
      ref.current.classList.add("block-project--show") 
  },[isModal])

  return(
    <React.Fragment>
      <Block blockRef={ref} name="block-project">
        <Block name="block-project-image">
          <Icon name={prop.iconName}/>
        </Block>
        <ProjectWrapperBlock
          title={prop.title}
          subtitle={prop.subtitle}
        />
      </Block>
      <ProjectModalBlock
        title={prop.title}
        subtitle={prop.subtitle}
        body={prop.body}
        iconName={prop.iconName}
        isModal={isModal}
        setIsModal={setIsModal}
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

export {Block, Nav, InfoBlock, ProjectBlock, DropdownBlock}