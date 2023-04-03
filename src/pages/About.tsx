import { useContext, useRef, useState } from "react"

import { isMobileContext } from "../App"

import { Icon } from "../components/icons/Icons"
import { Button } from "../components/buttons/Buttons"
import { Block, Canvas } from "../components/blocks/Blocks"
import { Text } from "../components/texts/Texts"

import {add, getKeyframe, remove} from "../functions/utils"

import data from "../firstPage.json"
import { bodyStyle, StyleType } from "../functions/function.types"

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

const About = () => {
  const isMobile = useContext(isMobileContext)

  const [index, setIndex] = useState(0)
  const [canvasActive, setCanvasActive] = useState(false)

  const parentRef = useRef<HTMLElement>(null!)
  const expandedRef = useRef<HTMLDivElement>(null!)
  const blockRef = useRef<HTMLDivElement>(null!)
  const sectionRef = useRef<HTMLDivElement>(null!)

  function goBack(e: MouseEvent) {
    index > 0 ?
    setIndex(index - 1):
    expandOut(e)
  }
  
  function goForward(e: MouseEvent) {
    index < 3 ?
    setIndex(index + 1):
    expandOut(e)
  }

  function expandIn(e: MouseEvent) {
    const block = blockRef.current
    const expanded = expandedRef.current
    const wrapper = sectionRef.current
    const parent = parentRef.current

    const isEnter: boolean = true
    const keyAmount: number = 3

    const styles = getStyles(isMobile)

    wrapper.animate(
      getKeyframe({
        block, parent, isEnter, keyAmount, ...styles 
      }), 
      {duration: 300, iterations: 1, easing: "ease-in-out"}
    )
      
    add(expanded.classList, "--enter") 

    document.body.setAttribute("style", bodyStyle[1])

    setTimeout(() => add(expanded.classList, "--show"), 5)

    setTimeout(() => setCanvasActive(true), 300)
  }

  function expandOut(e: MouseEvent) {
    const block = blockRef.current
    const expanded = expandedRef.current
    const wrapper = sectionRef.current
    const parent = parentRef.current

    const isEnter: boolean = false
    const keyAmount: number = 3

    const styles = getStyles(isMobile)
    
    wrapper.animate(
      getKeyframe({
        block, parent, isEnter, keyAmount, ...styles
      }), 
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
      <Text type='h1' name="text-title" children={about.tag}/>
      <Block type="div" name="block-about">
        <Block 
          type="div"
          name="block-values" 
          blockRef={blockRef}
          func={{onClick: expandIn}}
        />
        <Text type="h1" name="text-big" children={about.title}/>
        <Text type='p' name="text-normal" children={about.body[0]}/>
      </Block>
      <Block type="div" blockRef={expandedRef} name="block-values-expand">
        <section ref={sectionRef} id="values" className="block-wrapper">
          <Block type="div" name="block-wrapper-content">
            <Text type="h1" name="text-title">
              {values.tag}
            </Text>
            <Text type='h1' name="text-big-subtitle">
              {values.body[index]}
            </Text>
            <Block type="div" name="block-wrapper-button">
              <Button
                type="h2"
                name="button-white"
                ariaLabel="Voltar"
                func={{onClick: goBack}}
                children={<Icon name="arrow"/>}
              />
              <Button
                type="h2"
                name="button-white"
                ariaLabel="Próximo"
                func={{onClick: goForward}}
                children={<Icon name="arrow"/>}
              />
            </Block>
          </Block>
          {
            canvasActive &&
            <Canvas isMobile={isMobile} name="canvas-values"/>
          }
        </section>
      </Block>
    </section>
  )
}

export default About