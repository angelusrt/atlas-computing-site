"use client"

import {useRef, useState } from "react"
import { Button } from "../../components/buttons/Buttons"
import { Canvas } from "../../components/canvas/Canvas"
import { H1, P } from "../../components/texts/Texts"
import {add, getKeyframe, remove} from "../../functions/utils"
import { bodyStyle, StyleType } from "../../functions/types"
import data from "../../firstPage.json"
import "./About.css"

function getStyles(isMobile: boolean): StyleType {
  let pad: string[], endPad: string[], padAux: number[], radius: string[]

  if(isMobile){
    padAux = [0, 0, 100, 40]
    endPad = ["20px", "20px", "80px", "20px"]
  } else{
    padAux = [0, 0, 80, 160]
    endPad = ["40px", "80px", "40px", "80px"]
  }
  
  pad = ["0px", "0px", "0px", "0px"]
  radius = ["50%", "0"]

  return {pad, endPad, padAux, radius}
}

const about = data.about
const values = data.about.values

const About = ({isMobile}: {isMobile: boolean}) => {
  const [index, setIndex] = useState(0)
  const [canvasActive, setCanvasActive] = useState(false)

  const parentRef = useRef<HTMLElement>(null!)
  const expandedRef = useRef<HTMLDivElement>(null!)
  const blockRef = useRef<HTMLDivElement>(null!)
  const sectionRef = useRef<HTMLDivElement>(null!)

  function goBack() {
    index > 0 ? setIndex(index - 1): expandOut()
  }
  
  function goForward() {
    index < 3 ? setIndex(index + 1): expandOut()
  }

  function expandIn() {
    const block = blockRef.current
    const expanded = expandedRef.current
    const wrapper = sectionRef.current
    const parent = parentRef.current

    const isEnter: boolean = true
    const keyAmount: number = 3

    const styles = getStyles(isMobile)

    wrapper.animate(
      getKeyframe({block, parent, isEnter, keyAmount, ...styles}), 
      {duration: 300, iterations: 1, easing: "ease-in-out"}
    )
      
    add(expanded.classList, "--enter")
    document.body.setAttribute("style", bodyStyle[1])

    setTimeout(() => add(expanded.classList, "--show"), 5)
    setTimeout(() => setCanvasActive(true), 300)
  }

  function expandOut() {
    const block = blockRef.current
    const expanded = expandedRef.current
    const wrapper = sectionRef.current
    const parent = parentRef.current

    const isEnter: boolean = false
    const keyAmount: number = 3

    const styles = getStyles(isMobile)
    
    wrapper.animate(
      getKeyframe({block, parent, isEnter, keyAmount, ...styles}), 
      {duration: 800, iterations: 1, easing: "ease-in-out"}
    )

    remove(expanded.classList, "--show")

    setTimeout(() => {
      remove(expanded.classList, "--enter")
      document.body.setAttribute("style", bodyStyle[0])
      setCanvasActive(false)
    }, 800)
  }

  return(
    <section ref={parentRef} id="about" className="block-blue">
      <H1 name="title">{about.tag}</H1>
      <div className="block-about">
        <div className="block-values" ref={blockRef} onClick={expandIn}/>
        <H1 name="text-big">{about.title}</H1>
        <P name="text-normal">{about.body[0]}</P>
      </div>
      <div ref={expandedRef} className="block-values-expand">
        <section ref={sectionRef} id="values" className="wrapper">
          <div className="wrapper-content">
            <H1 name="title">{values.tag}</H1>
            <H1 name="subtitle-big">{values.body[index]}</H1>
            <div className="wrapper-button">
              <Button isIcon name="button-white" ariaLabel="Voltar" func={{onClick: goBack}}/>
              <Button isIcon name="button-white" ariaLabel="Próximo" func={{onClick: goForward}}/>
            </div>
          </div>
          {canvasActive && <Canvas isMobile={isMobile} name="canvas-values"/>}
        </section>
      </div>
    </section>
  )
}

export default About