import { Nav } from "../components/blocks/Blocks"
import { Globe } from "../components/canvas/Canvas"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

const Intro = () => (
  <section id="intro">
    <Nav/>
    <Globe/>
    <Text type='h1' name="text-intro-title">
      {data.intro.title[0]}
    </Text>
    <Text type='h1' name="text-intro-title">
      {data.intro.title[1]}
    </Text>
    <Text type='h2' name="text-intro-subtitle">
      {data.intro.subtitle}
    </Text>
  </section>
)

export default Intro