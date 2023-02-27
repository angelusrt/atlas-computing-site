import { Block } from "../components/blocks/Blocks"
import { Globe } from "../components/canvas/Canvas"
import { Text } from "../components/texts/Texts"

interface iIntro {
  subtitle: string
}

const Intro = (prop: iIntro) => (
  <section id="intro" className="block-white">
    <Block name="block-intro">
      <Text type='h1' name="text-big-title">
        Atlas
      </Text>
      <Text type='h1' name="text-big-title">
        Computing
      </Text>
      <Globe/>
      <Text type='h2' name="text-big-subtitle">
        {prop.subtitle}
      </Text>
    </Block>
  </section>
)

export default Intro