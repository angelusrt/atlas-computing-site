import { useEffect, useRef, useState } from "react"

import { Block } from "../components/blocks/Blocks"
import { Text } from "../components/texts/Texts"
import { StyleType, ExpandedType } from "../components/blocks/Blocks.types"

import {
  add, addPos, getStyle, remove, setAnimation, toggleScrollOnExpanded
} from "../functions/utils"

import Values from "./Values"

type AboutType = {
  tag: string,
  title: string,
  body: string,
  valuesTag: string,
  values: string[],
  isMobile: boolean
}

function getShowStyle(isMobile: boolean): string {
  const width = window.innerWidth
  const height = window.innerHeight

  if(isMobile)
    return `left: ${(width - height)/2}px`
  else
    return `top: ${(height - width)/2}px`
}

const About = (prop: AboutType) => {
  const {tag, title, body, valuesTag, values, isMobile} = prop

  const [isExpanded, setIsExpanded] = useState<ExpandedType>('unset')
  const [style, setStyle] = useState<StyleType>()
  const [currentValue, setCurrentValue] = useState(0)

  const ref = useRef<HTMLDivElement>(null!)
  const blockRef = useRef<HTMLDivElement>(null!)
  const sectionRef = useRef<HTMLDivElement>(null!)

  const valuesOptions = {
    values,
    valuesTag,
    currentValue,
    isMobile,
    blockRef: sectionRef,
    decrement, 
    increment,
  }

  function decrement() {
    currentValue > 0 ?
    setCurrentValue(currentValue - 1):
    setIsExpanded('expand-out')
  }
  
  function increment() {
    currentValue < 3 ?
    setCurrentValue(currentValue + 1):
    setIsExpanded('expand-out')
  }

  function getStyleOptions(): StyleType {
    return {
      isAbout: true,
      parentTop: document.getElementById('about')?.offsetTop,
      offsetTop: blockRef.current.offsetTop,
      offsetLeft: blockRef.current.offsetLeft,
      scrollY: window.scrollY
    }
  }

  function onClick() {
    setIsExpanded('expand-enter')
    setStyle(getStyleOptions)
  }

  useEffect(() => {
    const classList = ref.current.classList
    const section = sectionRef.current

    setAnimation({
      onEnter: () => {
        addPos(ref, getStyle(style))
        add(classList, "--enter")   
      },
      onEnterTimeout: () => {
        add(classList, "--show")
        addPos(ref, getShowStyle(isMobile))
        section.setAttribute('style', getShowStyle(isMobile)) 
      },
      onExit: () => {
        remove(classList, "--show")       
        addPos(ref, getStyle(style))
        section.setAttribute('style', getStyle(style)) 
      },
      onExitTimeout: () => {
        remove(classList, "--enter")
        setIsExpanded('unset')
        setCurrentValue(0)
      },
      exitTimeoutTime: 1000,
      isExpanded
    })

    toggleScrollOnExpanded(isExpanded)
  },[isExpanded, isMobile, style])

  return(
    <section id="about" className="block-blue">
      <Text 
        name="text-title" 
        type='h1'
        children={tag}
      />
      <Block type="div" name="block-about">
        <Block 
          type="div"
          name="block-values" 
          blockRef={blockRef}
          func={{onClick: onClick}}
        />
        <Text
          type="h1"
          name="text-big"
          children={title}
        />
        <Text 
          type='p' 
          name="text-normal"
          children={body}
        />
      </Block>
      <Block 
        type="div"
        blockRef={ref} 
        name="block-values-expand"
        children={Values(valuesOptions)}
      />
    </section>
  )
}

export default About