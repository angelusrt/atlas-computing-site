import React, { useRef, useState } from "react"

import { useAnimateOnView } from "../../functions/transition"
import { useToggleClass } from "../../functions/utils"
import { trans } from "../../functions/function.types"

import { Button } from "../buttons/Buttons"
import { Icon } from "../icons/Icons"
import { Text } from "../texts/Texts"

import { 
  BlockType,
  DropdownType,
  ProjectExpandedType,
  ProjectType,
  StyleType,
} from "./Blocks.types"
import "./blocks.css"

const paddingVertical = 80

const classArray: [string, string] = [
  "block-dropdown--show", "block-dropdown--none"
]

const Block = (prop: BlockType) => {
  useAnimateOnView(
    '.block-project', 
    {...trans, start: 400, delayPerItem: 200}
  )
  useAnimateOnView(
    '.block-about', 
    {...trans, start: 400, delayPerItem: 200}
  )

  return(
    <div 
      ref={prop.blockRef} 
      className={prop.name} 
      style={prop.style}
      {...prop.func}
    >
      {prop.children}
    </div>
  )
}

const ProjectBlock = (prop: ProjectType) => {
  const {
    iconName, isMobile, subtitle, title, onFunc, setStyle
  } = prop

  const ref = useRef<HTMLDivElement>(null!)

  const paddingHorizontal = isMobile ? 40 : 80

  function getStyle(): StyleType {
    const block = ref.current

    return {
      isAbout: false,
      offsetTop: block.offsetTop,
      offsetLeft: block.offsetLeft,
      offsetWidth: block.offsetWidth - paddingHorizontal,
      offsetHeight : block.offsetHeight - paddingVertical,
      parentTop: document.getElementById('projects')?.offsetTop,
      scrollY: window.scrollY,
      ref: ref
    }
  }

  return(
    <Block blockRef={ref} name="block-project">
      <Icon name={iconName}/>
      <Text 
        type="h1" 
        name="text-big"
        children={title}
      />
      <Text 
        type="p" 
        name="text-thin-small"
        children={subtitle}
      />
      <Button
        type="h2"
        name="button-white"
        func={{onClick: () => {
          onFunc()
          setStyle(getStyle())
        }}}
        text="Ver mais"
        ariaLabel="Ver mais"
        textName="text-bold-small"
      />
    </Block>
  )
}

const ProjectExpandedBlock = (prop: ProjectExpandedType) => (
  <Block blockRef={prop.blockRef} name="block-project-expanded">
    <Block name="block-wrapper">
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
        func={{onClick: () => prop.onFunc()}}
        ariaLabel="Voltar"
        text="Voltar"
        textName="text-bold-small"
      >
        <Text 
          type="h2" 
          name="text-bold-small" 
          children="Ver mais"
        />
      </Button>
    </Block>
  </Block>
)

const DropdownBlock = (prop: DropdownType) => {
  const {toggle, children} = prop

  const [time , setTime] = useState<NodeJS.Timeout>()

  const ref = useRef<HTMLDivElement>(null!)

  useToggleClass({
    ref, time, classArray, isToggle: toggle, setTime, 
  })

  return (
    <Block blockRef={ref} name="block-dropdown">
      {children}
    </Block>
  )
}

export {Block, ProjectBlock, ProjectExpandedBlock, DropdownBlock}