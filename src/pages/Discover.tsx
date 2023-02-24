import { useEffect, useRef } from "react"
import { Block, InfoBlock } from "../components/blocks/Blocks"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

const Discover = () => {
  const ref = useRef<HTMLElement>(null!)
  const recifeRef = useRef<SVGSVGElement>(null!)
  const blockRef = useRef<HTMLDivElement>(null!)
  
  const onDiscoverScroll = () => {
    if(ref.current){
      const isMobile = window.innerWidth < 725
      const offsetHeight = ref.current.offsetHeight
      const offsetTop = ref.current.offsetTop
      const scrollUnit = (window.scrollY - offsetTop)/offsetHeight
      
      const recifeComputer = {
        rotateZ: scrollUnit * 5,
        rotateX: scrollUnit * 20 + 60,
        translateY: scrollUnit * 10 + 30,
        translateX: scrollUnit * 10,
        scale: 1.2 + scrollUnit * 0.4,
        filter: 0.5 - scrollUnit * 5
      }

      const recifeMobile = {
        rotateZ: scrollUnit * 5 - 10,
        rotateX: scrollUnit * 20 + 50,
        translateY: scrollUnit * 15 + 70,
        translateX: scrollUnit * 5,
        scale: 1 + scrollUnit * 0.4,
        filter: 0.5 - scrollUnit * 5
      }

      const recife = isMobile ? recifeMobile : recifeComputer
      

      console.log(isMobile)
      if(recifeRef.current)
        recifeRef.current.setAttribute('style', `
          transform:
            rotateZ(${recife.rotateZ}deg)
            rotateX(${recife.rotateX}deg) 
            translateY(${recife.translateY}%)
            translateX(${recife.translateX}%)
            scale(${recife.scale})
          ;
          filter: blur(${recife.filter}px);
        `) 
        
      if(blockRef.current)
        blockRef.current.setAttribute('style', `
          transform: translateX(${-scrollUnit * 100}%);
          transition: none;
        `)
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onDiscoverScroll)
    return () => window.removeEventListener("scroll", onDiscoverScroll)
  },[])

  return(
    <section id="discover" ref={ref} className="block-black">
      <Text name="text-title" type='h1'>
        {data.discover.tag}
      </Text>
      <Block name="block-discover">
        <Icon elRef={recifeRef} name="Recife"/>
        <InfoBlock
          blockRef={blockRef}
          titleName="text-info-title text-white"
          title={data.discover.info[0].title}
          subtitleName="text-info-subtitle text-white"
          subtitle={data.discover.info[0].subtitle}
        />
      </Block>
    </section>
  )
}

export default Discover