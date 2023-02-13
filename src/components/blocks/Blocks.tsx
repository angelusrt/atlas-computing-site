import React, { useEffect, useRef, useState } from "react"
import { transition, useAnimateOnScroll } from "../../functions/transition"
import { Button, Link } from "../buttons/Buttons"
import { Icon } from "../icons/Icons"
import { Text } from "../texts/Texts"
import data from "../../data.json"
import "./blocks.css"
import { animateWithClass, animateWithClassProps } from "../../functions/utils"

type blockProps = {
  name: string,
  children?: any,
  style ?: React.CSSProperties,
  blockRef ?: React.LegacyRef<HTMLDivElement>
}

function Block(props: blockProps){
  useAnimateOnScroll(
    '.block-info', 
    {...transition, start: 800, delayPerItem: 200}
  )
  useAnimateOnScroll(
    '.block-project', 
    {...transition, start: 400, delayPerItem: 200}
  )
  useAnimateOnScroll(
    '.block-horizontal .block-wrapper', 
    {...transition, start: 400, delayPerItem: 200}
  )

  return(
    <div ref={props.blockRef} className={props.name} style={props.style}>
      {props.children}
    </div>
  )
}

function Nav(){
  const [isToggle, setToggle] = useState(false)

  return(
    <nav>
      <Button
        type='h1'
        color='white'
        text={data.nav.buttonNames[0]}
      />
      <Block name="block-wrapper">
        <Button
          type='h2'
          color='white'
          name="button-nav"
          text={data.nav.buttonNames[1]}
          func={{ 
            onTouchStart: () => setToggle(true),
            onTouchEnd: () => setToggle(false),
            onMouseEnter: () => setToggle(true),
            onMouseLeave: () => setToggle(false)
          }}
        >
          <Icon name="Dropdown"/>
          <DropdownBlock toggle={isToggle}>
            {data.index.map((item, index) => 
              <Link
                key={index}
                isNewTab={false}
                color="white"
                href={item.href}
                text={item.text}
              />
            )}
          </DropdownBlock>
        </Button>
        <Button
          type='h2'
          color='black'
          text={data.nav.buttonNames[2]}
        >
          <Icon name="Arrow"/>
        </Button>
      </Block>
    </nav>
  )
}

const textColor = {
  'white': 'text-white',
  'black': 'text-black'
}

type infoBlockProps = {
  title: string,
  subtitle: string,
  color: 'white' | 'black'
}

function InfoBlock(props: infoBlockProps): JSX.Element{
  return(
    <Block name="block-info">
      <Text 
        type="h2" 
        name={`text-info-title ${textColor[props.color]}`}
        children={props.title}
      />
      <Text 
        type="h1" 
        name={`text-info-subtitle ${textColor[props.color]}`}
        children={props.subtitle}
      />
    </Block>
  )
}

type projectModalBlockProps = {
  iconName: 'ReadingFlow' | 'Database' | 'Network'
  title: string,
  subtitle: string,
  body: string,
  isModal: boolean,
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const projectModalClass: [string, string] = [
  "block-modal-wrapper--show", 
  "block-modal-wrapper--none"
]

function ProjectModalBlock(props: projectModalBlockProps){
  const [time , setTime] = useState<NodeJS.Timeout>()
  const ref = useRef<HTMLDivElement>(null!)
  
  
  useEffect(() => {
    const animProps: animateWithClassProps = {
      classArray: projectModalClass,
      isToggle: props.isModal, 
      ref, setTime, time
    }
    
    animateWithClass(animProps)
  },[props.isModal])

  useEffect(() => {
    const offset = document.getElementById("projects")?.offsetTop
    const bodyStyle = document.body.style

    if(props.isModal){
      bodyStyle.overflow = "hidden"
      bodyStyle.height = "100%"  

      window.scrollTo({behavior: "smooth", top: offset})
    } else {
      bodyStyle.overflow = "auto"
      bodyStyle.height = "auto%"   
    }
  },[props.isModal])

  return(
    <Block blockRef={ref} name="block-modal-wrapper">
      <Block name="block-project-modal">
        <Block name="block-project-image">
          <Icon name={props.iconName}/>
        </Block>
        <Block name="block-wrapper">
          <Button color="white" type="h2" func={{
            onClick: () => props.setIsModal(false)
          }}>
            <Icon name="Arrow"/>
          </Button>
          <Text 
            type="h1" 
            name="text-project-title"
            children={props.title}
          />
          <Text 
            type="p" 
            name="text-project-subtitle"
            children={props.subtitle}
          />
          <Text 
            type="p" 
            name="text-project-body"
            children={props.body}
          />
        </Block>
      </Block>
    </Block>
  ) 
}

type projectBlockProps = {
  iconName: 'ReadingFlow' | 'Database' | 'Network'
  title: string,
  subtitle: string,
  body: string
}

function ProjectBlock(props: projectBlockProps){
  const[isModal, setIsModal] = useState(false)
  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const onClick = () => {
      ref.current.classList.remove("block-project--show")
      setIsModal(true)
    }
    
    if(ref.current)
      ref.current.addEventListener("click", onClick)
    
    return () => ref.current.removeEventListener("click", onClick)
  },[])

  useEffect(() => {
    if(ref.current && !isModal)
        ref.current.classList.add("block-project--show") 
  },[isModal])

  return(
    <React.Fragment>
      <Block blockRef={ref} name="block-project">
        <Block name="block-project-image">
          <Icon name={props.iconName}/>
        </Block>
        <Block name="block-wrapper">
          <Text 
            type="h1" 
            name="text-project-title"
            children={props.title}
          />
          <Text 
            type="p" 
            name="text-project-subtitle"
            children={props.subtitle}
          />
        </Block>
      </Block>
      <ProjectModalBlock
        title={props.title}
        subtitle={props.subtitle}
        body={props.body}
        iconName={props.iconName}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </React.Fragment>
  )
}

type dropdownProps = {
  children: any,
  toggle: boolean
}

const dropdownClass: [string, string] = [
  "block-dropdown--show", 
  "block-dropdown--none"
]

function DropdownBlock(props: dropdownProps): JSX.Element {
  const [time , setTime] = useState<NodeJS.Timeout>()
  const ref = useRef<HTMLDivElement>(null!)
  
  useEffect(() => {
    const animProps: animateWithClassProps = {
      classArray: dropdownClass,
      isToggle: props.toggle, 
      ref, setTime, time
    }

    animateWithClass(animProps)
  },[props.toggle])

  return (
    <Block blockRef={ref} name="block-dropdown">
      {props.children}
    </Block>
  )
}
export {Block, Nav, InfoBlock, ProjectBlock, DropdownBlock}