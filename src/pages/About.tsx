import { Block } from "../components/blocks/Blocks"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

const About = () => (
  <section id="about" className="block-white">
    <Text name="text-title" type='h1'>
      {data.about.tag}
    </Text>
    <Block name="block-horizontal">
      <Block name="block-wrapper">
        <Block name="block-about-image"/>
        <Text
          type="h1"
          name="text-project-title"
          children={data.about.title}
        />
      </Block>
      <Block name="block-wrapper">
        <Text type='p'>
          {data.about.body[0]}
        </Text>
      </Block>
    </Block>
  </section>
)

export default About