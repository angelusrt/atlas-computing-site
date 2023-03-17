import { Block } from "../components/blocks/Blocks"
import { Canvas } from "../components/canvas/Canvas"
import { Text } from "../components/texts/Texts"

type IntroType = {
  subtitle: string,
  isMobile: boolean
}

const Intro = (prop: IntroType) => (
  <section id="intro" className="block-white">
    <Block name="block-intro">
      <Text 
        type='h1' 
        name="text-big-title"
        children="Atlas"
      />
      <Text 
        type='h1' 
        name="text-big-title"
        children="Computing"
      />
      <Canvas 
        isMobile={prop.isMobile}
        name="canvas-globe"
      />
      <Text 
        type='h2' 
        name="text-big-subtitle"
        children={prop.subtitle}
      />
    </Block>
  </section>
)

export default Intro