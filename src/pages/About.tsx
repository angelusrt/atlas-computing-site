import { useEffect, useRef, useState } from "react"
import { Block } from "../components/blocks/Blocks"
import { Text } from "../components/texts/Texts"
import { StyleType, ExpandedType } from "../components/blocks/Blocks.types"
import {
  add, addPos, getStyle, remove, toggleScrollOnExpanded,
} from "../functions/utils"
import { Values } from "./Values"

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
    return `left: ${(width - height * 1.05)/2}px`
  else
    return `top: ${(height - width * 1.05)/2}px`
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
    setCurrentValue: (s: number) => setCurrentValue(s),
    setIsExpanded: (s: ExpandedType) => setIsExpanded(s), 
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

  useEffect(() => {
    const expand = ref.current
    const section = sectionRef.current

    if(isExpanded === "expand-out"){
      remove(expand.classList, "--show")       
      addPos(ref, getStyle(style))
      section.setAttribute('style', getStyle(style))
      
      setTimeout(() => {
        remove(expand.classList, "--enter")
        setIsExpanded('unset')
        setCurrentValue(0)
      }, 600)
    }
    else if(isExpanded === "expand-enter"){
      addPos(ref, getStyle(style))
      add(expand.classList, "--enter")  

      setTimeout(() => {
        add(expand.classList, "--show")
        addPos(ref, getShowStyle(isMobile))
        section.setAttribute('style', getShowStyle(isMobile))
      }, 5)
    }

    toggleScrollOnExpanded(isExpanded)
  },[isExpanded, isMobile, style])

  return(
    <section id="about" className="block-blue">
      <Text 
        name="text-title" 
        type='h1'
      >
        {tag}
      </Text>
      <Block name="block-about">
        <Block 
          name="image" 
          blockRef={blockRef}
          func={{ onClick: () => {
            setIsExpanded('expand-enter')
            setStyle(getStyleOptions)
          }}}
        />
        <Text
          type="h1"
          name="text-big"
        >
          {title}
        </Text>
        <Text 
          type='p' 
          name="text-normal"
        >
          {body}
        </Text>
      </Block>
      <Block 
        blockRef={ref} 
        name="image-expand"
      >
        <Block 
          name="block-wrapper"
          children={
            Values(valuesOptions)
          }
        />
      </Block>
    </section>
  )
}

export default About