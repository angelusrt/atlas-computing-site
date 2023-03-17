import { useEffect, useRef } from "react"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

type DiscoverType = {
  tag: string,
  isMobile: boolean
}

const Discover = (prop: DiscoverType) => {
  const {tag, isMobile} = prop

  const sectionRef = useRef<HTMLElement>(null!)
  const recifeRef = useRef<SVGSVGElement>(null!)
  const textRef = useRef<HTMLParagraphElement>(null!)  
  
  useEffect(() => {
    const section = sectionRef.current
    const recife = recifeRef.current
    const text = textRef.current

    function onScroll() {
      const offsetHeight = section.offsetHeight
      const offsetTop = section.offsetTop
  
      const scrollUnit = (window.scrollY - offsetTop)/offsetHeight
      
      recife.setAttribute('style', `
        transform:
          rotateZ(${scrollUnit * 5}deg)
          rotateX(${scrollUnit * 20 + 60}deg) 
          translateY(${scrollUnit * 10 + 30}%)
          translateX(${scrollUnit * 10}%)
          scale(${1.2 + scrollUnit * 0.4})
        ;
        filter: blur(${0.5 - scrollUnit * 2}px);
      `)
  
      text.setAttribute('style', `
        transform: translateX(${-scrollUnit * 100}%);
        transition: none;
      `)
    }

    if(section && recife && text && !isMobile)
      window.addEventListener("scroll", onScroll)
    
    return () => window.removeEventListener("scroll", onScroll)
  },[isMobile])

  return(
    <section id="discover" ref={sectionRef} className="block-black">
      <Text 
        name="text-title" 
        type='h1'
        children={tag}
      />
      <Icon 
        elRef={recifeRef} 
        name="Recife"
      />
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