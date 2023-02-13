import { useEffect, useRef } from "react"
import { Block, InfoBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import data from "../data.json"

function Discover(){
  const recifeRef = useRef<SVGSVGElement>(null!)
  const cablesRef = useRef<SVGSVGElement>(null!)

  useEffect(() => {
    const onScroll = () => {
      const isMobile = window.innerWidth < 725
      const scrollUnit = isMobile ? window.scrollY/40 : window.scrollY/20
  
  
      const recifeOffset = isMobile ? 765 : 790
      const recifeRotate = scrollUnit - recifeOffset
      
      if(recifeRef.current)
        recifeRef.current.setAttribute('style', `
          transform:
            rotateX(${recifeRotate}deg) 
            rotateZ(0deg);
        `)
  
      
      const cablesOffset = isMobile ? 760 : 785
      const cablesRotate = scrollUnit - cablesOffset
    
      if(cablesRef.current)
        cablesRef.current.setAttribute('style', `
          transform:
            rotateX(0deg) 
            rotateZ(${(isMobile ? -10 : 20) - (cablesRotate/2)}deg);
        `)    
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return(
    <section id="discover">
      <Button
        type="h1"
        color="black"
        text={data.discover.tag}
      />
      <Block name="block-discover">
        <Icon elRef={recifeRef} name="Recife"/>
        <InfoBlock
          title={data.discover.info[0].title}
          subtitle={data.discover.info[0].subtitle}
          color="white"
        />
      </Block>
      <Block name="block-discover">
        <Icon elRef={cablesRef} name="Cables"/>
        <InfoBlock
          title={data.discover.info[1].title}
          subtitle={data.discover.info[1].subtitle}
          color="white"
        />
      </Block>
    </section>
  )
}

export {Discover}