"use client"

import {useRef } from "react"
import { Button } from "../../components/buttons/Buttons"
import { H1, P } from "../../components/texts/Texts"
import {add, remove} from "../../functions/utils"
import { bodyStyle } from "../../functions/types"
import data from "../../firstPage.json"
import "./About.css"

function getStyles(block: HTMLDivElement): string {
  const parentTop = document.getElementById('about')?.offsetTop || 0

  return `
    top: ${block.offsetTop - window.scrollY + parentTop}px;
    left: ${block.offsetLeft}px;
  `
}

const about = data.about
const values = data.about.values

const About = () => {
  const index = useRef(0)

  const ref = useRef<HTMLDivElement>(null!)
  const expandedRef = useRef<HTMLDivElement>(null!)
  const wrapperRef = useRef<HTMLDivElement>(null!)

  const subtitleRef = useRef<HTMLParagraphElement>(null!)
  const videoRef = useRef<HTMLVideoElement>(null!)

  function expandIn() {      
    const block = ref.current
    wrapperRef.current.setAttribute('style', getStyles(block))

    remove(expandedRef, "--none")
    document.body.setAttribute("style", bodyStyle[1])

    videoRef.current.play()

    setTimeout(() => add(expandedRef, "--show"), 5)
  }

  function expandOut(mode: "next" | "previous") {
    if(mode === "previous" && index.current > 0 && index.current <= 2){
      subtitleRef.current.innerHTML = values.body[index.current - 1]
      index.current -= 1
      return undefined
    }
    else if(mode === "next" && index.current >= 0 && index.current < 2) {
      subtitleRef.current.innerHTML = values.body[index.current + 1]
      index.current += 1
      return undefined
    }
    else {  
      const block = ref.current
      wrapperRef.current.setAttribute('style', getStyles(block))

      remove(expandedRef, "--show")
  
      setTimeout(() => {
        add(expandedRef, "--none")
        document.body.setAttribute("style", bodyStyle[0])

        subtitleRef.current.innerHTML = values.body[0]
        index.current = 0

        videoRef.current.pause()
      }, 750)
    }
  }

  return(
    <section id="about" className="block-blue">
      <H1 name="title">{about.tag}</H1>
      <div className="about">
        <div ref={ref} className="values" onClick={expandIn}/>
        <H1 name="text-big">{about.title}</H1>
        <P name="text-normal">{about.body[0]}</P>
      </div>
      <div ref={expandedRef} className="values-expand values-expand--none">
        <section ref={wrapperRef} id="values" className="wrapper">
          <div className="wrapper-content">
            <H1 name="title">{values.tag}</H1>
            <H1 textRef={subtitleRef} name="subtitle-big">{values.body[0]}</H1>
            <div className="wrapper-button">
              <Button 
                isIcon 
                name="button-white" 
                ariaLabel="Voltar" 
                func={{onClick: () => expandOut("previous")}}
              />
              <Button 
                isIcon 
                name="button-white" 
                ariaLabel="Próximo" 
                func={{onClick: () => expandOut("next")}}
              />
            </div>
          </div>
          <video ref={videoRef} src="/lighthouse.mp4" muted loop/>
        </section>
      </div>
    </section>
  )
}

export default About