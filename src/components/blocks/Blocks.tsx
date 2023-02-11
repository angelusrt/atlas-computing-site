import { useEffect, useRef, useState } from "react"
import { transition, useAnimateOnScroll } from "../../functions/transition"
import { Button, Link } from "../buttons/Buttons"
import { Icon } from "../icons/Icons"
import { Text } from "../texts/Texts"
import data from "../../data.json"
import "./blocks.css"

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

type projectBlockProps = {
  iconName: 'ReadingFlow' | 'Database' | 'Network'
  title: string,
  subtitle: string
}

function ProjectBlock(props: projectBlockProps): JSX.Element{
  return(
    <Block name="block-project">
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
          name="text-project-body"
          children={props.subtitle}
        />
      </Block>
    </Block>
  )
}

type dropdownProps = {
  children: any,
  toggle: boolean
}

const dropdownClass = [
  "block-dropdown--show", 
  "block-dropdown--none"
]

function DropdownBlock(props: dropdownProps): JSX.Element {
  const [time , setTime] = useState<NodeJS.Timeout>()
  const ref = useRef<HTMLDivElement>(null!)
  
  useEffect(() => {
    const classList = ref.current.classList
    const removeClass = (i: number) => classList.remove(dropdownClass[i]) 
    const addClass = (i: number) => classList.add(dropdownClass[i])

    if(time !== undefined) clearTimeout(time)

    if(!props.toggle){
      removeClass(0)
      setTime(setTimeout(() => addClass(1), 1000))
    } else if(props.toggle){
      removeClass(1)
      setTime(setTimeout(() => addClass(0), 10))
    }
  },[props.toggle, ref.current])

  return (
    <Block blockRef={ref} name="block-dropdown">
      {props.children}
    </Block>
  )
}
export {Block, Nav, InfoBlock, ProjectBlock, DropdownBlock}