"use client"

import { useRef, useState } from "react"
import { Button } from "../../components/buttons/Buttons"
import { Block } from "../../components/blocks/Blocks"
import { Icon } from "../../components/icons/Icons"
import { H1, H2, P } from "../../components/texts/Texts"
import {add, getKeyframe, remove} from "../../functions/utils"
import { bodyStyle, StyleType } from "../../functions/types"
import data from "../../firstPage.json"
import "./Projects.css"

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
  isMobile: boolean,
  setIndex: () => void
  setRef: (s: React.MutableRefObject<HTMLDivElement>) => void
}

const itens = data.projects.itens

const Projects = ({isMobile}: {isMobile: boolean}) => {
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
      <H1 name="title">{data.projects.tag}</H1>
      <Block blockRef={wrapperBlockRef} name="block-grid">
        {itens.map((e, i) => 
          <ProjectBlock
            blockRef={expandedRef}
            wrapperRef={wrapperRef}
            parentRef={parentRef}
            isMobile={isMobile}
            key={i}
            item={e}
            setIndex={() => setIndex(i)}
            setRef={(s) => setRef(s)}
          />
        )}
      </Block>
      <div ref={expandedRef} className="project-expanded">
        <div ref={wrapperRef} className="wrapper">
          <Icon name={itens[index].icon}/>
          <H1 name="text-big">{itens[index].title}</H1>
          <P name="text-thin-small">{itens[index].subtitle}</P>
          <P name="text-normal">{itens[index].body}</P>
          <Button name="button-white" text="Voltar" func={{onClick: expandOut}}>
            <H2 name="text-bold-small">Ver mais</H2>
          </Button>
        </div>
      </div>
    </section>
  )
}

const ProjectBlock = (prop: ProjectType) => {
  const {blockRef, parentRef, wrapperRef, isMobile, item, setIndex, setRef} = prop
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
    <div ref={ref} className="project">
      <Icon name={item.icon}/>
      <H1 name="text-big">{item.title}</H1>
      <P name="text-thin-small">{item.subtitle}</P>
      <Button name="button-white" text="Ver mais" func={{onClick: expandIn}}/>
    </div>
  )
}
export default Projects