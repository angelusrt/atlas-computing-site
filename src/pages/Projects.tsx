import { useEffect, useRef, useState } from "react"
import { Block, ProjectExpandedBlock, ProjectBlock } from "../components/blocks/Blocks"
import { ExpandedType, StyleType } from "../components/blocks/Blocks.types"
import { Text } from "../components/texts/Texts"
import {
  add,
  addPos,
  getStyle,
  remove,
  toggleScrollOnExpanded,
} from "../functions/utils"

type ProjectsType = {
  tag: string,
  itens: {
    icon: string, 
    title: string, 
    subtitle: string, 
    body: string
  }[],
  isMobile: boolean
}

const Projects = (prop: ProjectsType) => {
  const {tag, itens, isMobile} = prop
  
  const[isExpanded, setIsExpanded] = useState<ExpandedType>('unset')
  const[project, setProject] = useState(0)
  const[style, setStyle] = useState<StyleType>()
  
  const ref = useRef<HTMLDivElement>(null!)

  const projects = itens.map((item, id) => 
    <ProjectBlock
      key={id}
      isMobile={isMobile}
      iconName={item.icon}
      title={item.title}
      subtitle={item.subtitle}
      setStyle={s => setStyle(s)} 
      onFunc={() => {
        setIsExpanded('expand-enter')
        setProject(id)
      }}
    />
  )

  useEffect(() => {
    if(isExpanded === "expand-out"){
      remove(ref.current.classList, "--show")  

      setTimeout(() => {
        remove(ref.current.classList, "--enter")
        setIsExpanded('unset')
      }, isMobile ? 700 : 1000)
    } 
    else if(isExpanded === "expand-enter"){
      addPos(ref, getStyle(style))
      add(ref.current.classList, "--enter")  

      setTimeout(() => {
        add(ref.current.classList, "--show")
      }, 5)
    }

    toggleScrollOnExpanded(isExpanded) 
  },[isExpanded, isMobile, style])

  return(
    <section id="projects" className="block-white">
      <Text name="text-title" type='h1'>
        {tag}
      </Text>
      <Block 
        name="block-grid"
        children={projects}
      />
      <ProjectExpandedBlock
        blockRef={ref}
        iconName={itens[project].icon}
        title={itens[project].title}
        subtitle={itens[project].subtitle}
        body={itens[project].body}
        onFunc={() => setIsExpanded('expand-out')}
      />
    </section>
  )
}

export default Projects