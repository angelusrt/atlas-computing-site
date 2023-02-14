import { useRef } from "react"
import { Block, InfoBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import data from "../data.json"

const Discover = () => {
  const ref = useRef<HTMLElement>(null!)
  const recifeRef = useRef<SVGSVGElement>(null!)
  const cablesRef = useRef<SVGSVGElement>(null!)
  
  // const onDiscoverScroll = () => {
  //   const isMobile = window.innerWidth < 725
  //   const scrollUnit = isMobile ? window.scrollY/40 : window.scrollY/20

  //   const recifeOffset = isMobile ? 765 : 790
  //   const recifeRotate = scrollUnit - recifeOffset
    
  //   if(recifeRef.current)
  //     recifeRef.current.setAttribute('style', `
  //       transform:
  //         rotateX(${recifeRotate}deg) 
  //         rotateZ(0deg);
  //     `) 
    
  //   const cablesOffset = isMobile ? 760 : 785
  //   const cablesRotate = scrollUnit - cablesOffset
  
  //   if(cablesRef.current)
  //     cablesRef.current.setAttribute('style', `
  //       transform:
  //         rotateX(0deg) 
  //         rotateZ(${(isMobile ? -10 : 20) - (cablesRotate/2)}deg);
  //     `)    
  // }
  
  // useEffect(() => {
  //   window.addEventListener("scroll", onDiscoverScroll)
  //   return () => window.removeEventListener("scroll", onDiscoverScroll)
  // },[])

  return(
    <section id="discover" ref={ref}>
      <Button
        type="h1"
        name="button-title button-black"
        textName="text-button-white"
        text={data.discover.tag}
      />
      <Block name="block-discover">
        <Icon elRef={recifeRef} name="Recife"/>
        <InfoBlock
          titleName="text-info-title text-white"
          title={data.discover.info[0].title}
          subtitleName="text-info-subtitle text-white"
          subtitle={data.discover.info[0].subtitle}
        />
      </Block>
      <Block name="block-discover">
        <Icon elRef={cablesRef} name="Cables"/>
        <InfoBlock
          titleName="text-info-title text-white"
          title={data.discover.info[1].title}
          subtitleName="text-info-subtitle text-white"
          subtitle={data.discover.info[1].subtitle}
        />
      </Block>
    </section>
  )
}

export default Discover