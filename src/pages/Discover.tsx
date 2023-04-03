import { useContext, useEffect, useRef } from "react"
import { isMobileContext } from "../App"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"
import data from "../firstPage.json"

const discover = data.discover

const Discover = (prop: {active: number}) => {
  const {active} = prop
  
  const isMobile = useContext(isMobileContext)

  const sectionRef = useRef<HTMLElement>(null!)
  const recifeRef = useRef<SVGSVGElement>(null!)
  const textRef = useRef<HTMLParagraphElement>(null!)  
  
  useEffect(() => {
    const section = sectionRef.current
    const recife = recifeRef.current
    const text = textRef.current
    const threshold = 400

    function onScroll() {
      const offsetHeight = section.offsetHeight
      const offsetTop = section.offsetTop
      const scrollY = window.scrollY

      const viewStart = offsetTop - threshold
      const viewEnd = offsetTop + offsetHeight
      
      if(scrollY >= viewStart && scrollY <= viewEnd){
        const scrollUnit = (scrollY - offsetTop)/offsetHeight
        
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
    }

    if(section && recife && text && !isMobile && active === 0)
      window.addEventListener("scroll", onScroll)
    
    return () => window.removeEventListener("scroll", onScroll)
  },[isMobile, active === 0])

  return(
    <section id="discover" ref={sectionRef} className="block-black">
      <Text type='h1' name="text-title" children={discover.tag}/>
      <Icon blockRef={recifeRef} name="Recife"/>
      <Text textRef={textRef} type="h1" name="text-big-subtitle">
        Recife
      </Text>
    </section>
  )
}

export default Discover