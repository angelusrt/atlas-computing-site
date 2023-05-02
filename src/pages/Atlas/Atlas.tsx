import { useContext, useEffect, useState } from "react"
import { isMobileContext } from "../../App"
import { Canvas } from "../../components/canvas/Canvas"
import { H1, H2 } from "../../components/texts/Texts"
import data from "../../firstPage.json"
import "./Atlas.css"

const atlas = data.atlas

const Atlas = () => {
  const isMobile = useContext(isMobileContext)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    function onScroll() {
      if(window.scrollY > 490 && isVisible)
        setIsVisible(false)
      else if(window.scrollY < 490 && !isVisible)
        setIsVisible(true)
    }

    if(isMobile) document.addEventListener("scroll", onScroll)

    return () => document.removeEventListener("scroll", onScroll)
  }, [isVisible])

  return(
    <section id="atlas" className="block-white">
      <div className="wrapper">
        <H1 name="title-big">Atlas</H1>
        <H1 name="title-big">Computing</H1>
        <div className="wrapper-canvas">
          {(isVisible && isMobile) && <Canvas isMobile={isMobile} name="canvas-globe"/>}
        </div>
        <H2 name="subtitle-big">{atlas.subtitle}</H2>
      </div>
    </section>
  )
}

export default Atlas