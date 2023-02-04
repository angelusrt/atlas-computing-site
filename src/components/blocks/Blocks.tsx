import { useState } from "react"
import { Style } from "util"
import { Button, Link } from "../buttons/Buttons"
import { Icon } from "../icons/Icons"
import { Text } from "../texts/Texts"
import "./blocks.css"

type blockProps = {
  name: string,
  children?: any,
  style ?: any
}

function Block(props: blockProps): JSX.Element{
  return(
    <div className={props.name} style={props.style}>
      {props.children}
    </div>
  )
}

function Nav(): JSX.Element{
  const [isToggle, setToggle] = useState(false)

  return(
    <nav>
      <Button
        type='h1'
        color='white'
        text='AtCom'
      />
      <Block name="block-wrapper">
        <Button
          type='h2'
          color='white'
          text='Indíce'
          func={{ 
            onTouchStart: () => setToggle(true),
            onTouchEnd: () => setToggle(false),
            onMouseEnter: () => setToggle(true),
            onMouseLeave: () => setToggle(false)
          }}
        >
          <Icon name="Dropdown"/>
          <DropdownBlock 
            style={{display: !isToggle ? 'none' : 'flex'}}
          >
            <Link
              color="white"
              href="#"
              text="Introdução"
            />
            <Link
              color="white"
              href="#"
              text="Descubra"
            />
            <Link
              color="white"
              href="#"
              text="Projetos"
            />
          </DropdownBlock>
        </Button>
        <Button
          type='h2'
          color='black'
          text='Entre'
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
  title: string,
  subtitle: string
}

function ProjectBlock(props: projectBlockProps): JSX.Element{
  return(
    <Block name="block-project">
      <Block name="block-project-image"/>
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
  style: any
}

function DropdownBlock(props: dropdownProps): JSX.Element{
  return(
    <Block name="block-dropdown" style={props.style}>
      {props.children}
    </Block>
  )
}
export {Block, Nav, InfoBlock, ProjectBlock, DropdownBlock}