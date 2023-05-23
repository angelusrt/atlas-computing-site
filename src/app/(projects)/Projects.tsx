"use client"

import { useContext, useRef } from "react"
import { Button } from "../../components/buttons/Buttons"
import { Icon } from "../../components/icons/Icons"
import { H1, H2, P } from "../../components/texts/Texts"
import { addEl, removeEl } from "../../functions/utils"
import { bodyStyle } from "../../functions/types"
import { langContext } from "../layout"
import data from "../../data/firstPage.json"
import "./Projects.css"

const Projects = () => {
  const {lang} = useContext(langContext)
  const itens = data[lang].projects.itens
  const buttons = data[lang].projects.buttons

  const projectsRef = useRef<HTMLDivElement[]>([])
  const expandedRef = useRef<HTMLDivElement[]>([])
  const wrapperRef = useRef<HTMLDivElement[]>([])
  
  function expandIn(i: number) {
    const project = projectsRef.current[i]
    const measures = project.getBoundingClientRect()

    wrapperRef.current[i].setAttribute(
      'style',
      `transform: translateX(${measures.x}px) translateY(${measures.y}px);`
    )

    const expanded = expandedRef.current[i]
    removeEl(expanded, "--none")
    
    document.body.setAttribute("style", bodyStyle[1])
    setTimeout(() => addEl(expanded, "--show"), 5)
  }
  
  function expandOut(i: number) {
    const expanded = expandedRef.current[i]
    removeEl(expanded, "--show")  
    
    setTimeout(() => {
      document.body.setAttribute("style", bodyStyle[0])
      addEl(expanded, "--none")
    }, 500)
  }

  return(
    <section id="projects" className="block-white">
      <H1 name="title">{data[lang].projects.tag}</H1>
      <div className="wrapper-project">
        {itens.map((item, i) => 
          <div ref={el => projectsRef.current[i] = el as HTMLDivElement} key={i} className="project">
            <Icon name={item.icon}/>
            <H1 name="text-big">{item.title}</H1>
            <P name="text-thin-small">{item.subtitle}</P>
            <Button name="button-white" text={buttons[0]} onClick={() => expandIn(i)}/>
          </div>
        )}
      </div>
      {itens.map((item, i) => 
        <div 
          key={i} 
          ref={el => expandedRef.current[i] = el as HTMLDivElement} 
          className="project-expanded project-expanded--none"
        >
          <div ref={el => wrapperRef.current[i] = el as HTMLDivElement} className="wrapper">
            <Icon name={item.icon}/>
            <H1 name="text-big">{item.title}</H1>
            <P name="text-thin-small">{item.subtitle}</P>
            <P name="text-normal">{item.body}</P>
            <Button name="button-white" text={buttons[1]} onClick={() => expandOut(i)}>
              <H2 name="text-bold-small">{buttons[0]}</H2>
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
