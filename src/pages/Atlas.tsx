import { Block, Canvas } from "../components/blocks/Blocks"
import { Text } from "../components/texts/Texts"

type AtlasType = {
  subtitle: string,
  isMobile: boolean
}

const Atlas = (prop: AtlasType) => (
  <section id="atlas" className="block-white">
    <Block type="div" name="block-wrapper">
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

export default Atlas