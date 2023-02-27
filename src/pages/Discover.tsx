import { useEffect, useRef } from "react"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

interface iDiscover{
  tag: string
}

const Discover = (prop: iDiscover) => {
  const ref = useRef<HTMLElement>(null!)
  const recifeRef = useRef<SVGSVGElement>(null!)
  const textRef = useRef<HTMLParagraphElement>(null!)
  
  const onDiscoverScroll = () => {
    const offsetHeight = ref.current.offsetHeight
    const offsetTop = ref.current.offsetTop
    const scrollUnit = (window.scrollY - offsetTop)/offsetHeight
    
    recifeRef.current.setAttribute('style', `
      transform:
        rotateZ(${scrollUnit * 5}deg)
        rotateX(${scrollUnit * 20 + 60}deg) 
        translateY(${scrollUnit * 10 + 30}%)
        translateX(${scrollUnit * 10}%)
        scale(${1.2 + scrollUnit * 0.4})
      ;
      filter: blur(${0.5 - scrollUnit * 2}px);
    `)

    textRef.current.setAttribute('style', `
      transform: translateX(${-scrollUnit * 100}%);
      transition: none;
    `)
  }
  
  useEffect(() => {
    const isMobile = window.innerWidth < 725
    
    if(ref.current && textRef.current && recifeRef.current && !isMobile)
      window.addEventListener("scroll", onDiscoverScroll)
    
    return () => window.removeEventListener("scroll", onDiscoverScroll)
  },[ref.current, textRef.current, recifeRef.current])

  return(
    <section id="discover" ref={ref} className="block-black">
      <Text name="text-title" type='h1'>{prop.tag}</Text>
      <Icon elRef={recifeRef} name="Recife"/>
      <Text 
        textRef={textRef}
        type="h1" 
        name="text-big-subtitle"
        children="Recife"
      />
    </section>
  )
}

export default Discover