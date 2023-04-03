import { useContext, useEffect, useState } from "react"
import { isMobileContext } from "../App"
import { Block, Canvas } from "../components/blocks/Blocks"
import { Text } from "../components/texts/Texts"
import data from "../firstPage.json"

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
      <Block type="div" name="block-wrapper">
        <Text type='h1' name="text-big-title" children="Atlas"/>
        <Text type='h1' name="text-big-title" children="Computing"/>
        <Block type="div" name="block-canvas-wrapper">
          {
            (isVisible && isMobile) &&
            <Canvas isMobile={isMobile} name="canvas-globe"/>
          }
        </Block>
        <Text type='h2' name="text-big-subtitle">
          {atlas.subtitle}
        </Text>
      </Block>
    </section>
  )
}

export default Atlas