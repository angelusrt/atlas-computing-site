import React, { useContext, useRef, useState } from "react"

import { isMobileContext } from "../App"

import { Button } from "../components/buttons/Buttons"
import { Block } from "../components/blocks/Blocks"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

import {add, getKeyframe, remove} from "../functions/utils"
import { bodyStyle, StyleType } from "../functions/function.types"

import data from "../firstPage.json"

function getStyles(isMobile: boolean): StyleType {
  let pad: string[], endPad: string[], padAux: number[], radius: string[]

  if(isMobile){
    pad = ["40px", "20px", "120px", "20px"]
    padAux = [160, 40, 120, 40]
    endPad = ["20px", "20px", "100px", "20px"]
  } else{
    const width = 0.4 * window.innerWidth

    pad = ["40px", "40px", "120px", "40px"]
    padAux = [160, 80, 220, width]
    endPad = ["80px", `${width/2}px`, "140px", `${width/2}px`]
  }
  
  radius = ["0", "0"]

  return {pad, endPad, padAux, radius}
}

type ItensType = {
  icon: string, 
  title: string, 
  subtitle: string, 
  body: string
}

type ProjectType = {
  blockRef: React.MutableRefObject<HTMLDivElement>,
  parentRef: React.MutableRefObject<HTMLElement>,
  wrapperRef: React.MutableRefObject<HTMLDivElement>,
  item: ItensType,
  setIndex: () => void
  setRef: (s: React.MutableRefObject<HTMLDivElement>) => void
}

const itens = data.projects.itens

const Projects = () => {
  const isMobile = useContext(isMobileContext)

  const [index, setIndex] = useState(0)
  const [ref, setRef] = useState<React.MutableRefObject<HTMLDivElement>>()

  const parentRef = useRef<HTMLElement>(null!)
  const expandedRef = useRef<HTMLDivElement>(null!)
  const wrapperBlockRef = useRef<HTMLDivElement>(null!)
  const wrapperRef = useRef<HTMLDivElement>(null!)

  function expandOut(e: MouseEvent) {
    const block = ref?.current 

    if(!block) return undefined

    const expanded = expandedRef.current
    const wrapper = wrapperRef.current
    const parent = parentRef.current

    const isEnter = false
    const keyAmount = 2
    const styles = getStyles(isMobile)

    wrapper.animate(
      getKeyframe({block, parent, isEnter, keyAmount, ...styles}), 
      {duration: 500, iterations: 1, easing: "ease-in-out"}
    )

    remove(expanded.classList, "--show")

    setTimeout(() => {
      remove(expanded.classList, "--enter")

      document.body.setAttribute("style", bodyStyle[0])
    }, 485)
  }

  return(
    <section ref={parentRef} id="projects" className="block-white">
      <Text type='h1' name="text-title">
        {data.projects.tag}
      </Text>
      <Block blockRef={wrapperBlockRef} type="div" name="block-grid">
        {itens.map((e, i) => 
          <ProjectBlock
            blockRef={expandedRef}
            wrapperRef={wrapperRef}
            parentRef={parentRef}
            key={i}
            item={e}
            setIndex={() => setIndex(i)}
            setRef={(s) => setRef(s)}
          />
        )}
      </Block>
      <Block type="div" blockRef={expandedRef} name="block-project-expanded">
        <Block blockRef={wrapperRef} type="div" name="block-wrapper">
          <Icon name={itens[index].icon}/>
          <Text type="h1" name="text-big" children={itens[index].title}/>
          <Text type="p" name="text-thin-small" children={itens[index].subtitle}/>
          <Text type="p" name="text-normal" children={itens[index].body}/>
          <Button
            type="h2"
            name="button-white"
            func={{onClick: expandOut}}
            ariaLabel="Voltar"
            text="Voltar"
            textName="text-bold-small"
          >
            <Text type="h2" name="text-bold-small" children="Ver mais"/>
          </Button>
        </Block>
      </Block>
    </section>
  )
}

const ProjectBlock = (prop: ProjectType) => {
  const {blockRef, parentRef, wrapperRef, item, setIndex, setRef} = prop

  const isMobile = useContext(isMobileContext)

  const ref = useRef<HTMLDivElement>(null!)

  function expandIn(e: MouseEvent) {
    setIndex()

    const block = ref.current
    const expanded = blockRef.current
    const wrapper = wrapperRef.current
    const parent = parentRef.current

    const isEnter = true
    const keyAmount = 2
    const styles = getStyles(isMobile)

    wrapper.animate(
      getKeyframe({block, parent, isEnter, keyAmount, ...styles}), 
      {duration: 500, iterations: 1, easing: "ease-in-out"}
    )
      
    add(expanded.classList, "--enter") 

    document.body.setAttribute("style", bodyStyle[1])

    setTimeout(() => add(expanded.classList, "--show"), 5)

    setRef(ref)
  }

  return(
    <Block type='div' blockRef={ref} name="block-project">
      <Icon name={item.icon}/>
      <Text type="h1" name="text-big" children={item.title}/>
      <Text type="p" name="text-thin-small" children={item.subtitle}/>
      <Button
        type="h2"
        name="button-white"
        func={{onClick: expandIn}}
        text="Ver mais"
        ariaLabel="Ver mais"
        textName="text-bold-small"
      />
    </Block>
  )
}
export default Projects