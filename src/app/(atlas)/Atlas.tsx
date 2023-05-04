"use client"

import { useEffect, useState } from "react"
import { Canvas } from "../../components/canvas/Canvas"
import { H1, H2 } from "../../components/texts/Texts"
import data from "../../firstPage.json"
import "./Atlas.css"

const atlas = data.atlas

const Atlas = ({isMobile}: {isMobile: boolean}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    function onScroll() {
      if(isVisible && window.scrollY > 490)
        setIsVisible(false)
      else if(!isVisible && window.scrollY < 490)
        setIsVisible(true)
    }

    if(isMobile) document.addEventListener("scroll", onScroll)

    return () => document.removeEventListener("scroll", onScroll)
  }, [isVisible, isMobile])

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