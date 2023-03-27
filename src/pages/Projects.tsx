import { useEffect, useRef, useState } from "react"
import { Block, ProjectExpandedBlock, ProjectBlock } from "../components/blocks/Blocks"
import { ExpandedType, StyleType } from "../components/blocks/Blocks.types"
import { Text } from "../components/texts/Texts"
import {
  add,
  addPos,
  getStyle,
  remove,
  setAnimation,
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
    const classList = ref.current.classList 
    
    setAnimation({
      onEnter: () => {
        addPos(ref, getStyle(style))
        add(classList, "--enter")  
      },
      onEnterTimeout: () => {
        add(classList, "--show")
      },
      onExit: () => {
        remove(classList, "--show")  
      },
      onExitTimeout: () => {
        remove(classList, "--enter")
        setIsExpanded('unset')
      },
      exitTimeoutTime: isMobile ? 700 : 1000,
      isExpanded
    })

    toggleScrollOnExpanded(isExpanded) 
  },[isExpanded, isMobile, style])

  return(
    <section id="projects" className="block-white">
      <Text 
        type='h1'
        name="text-title" 
        children={tag}
      />
      <Block 
        type="div"
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