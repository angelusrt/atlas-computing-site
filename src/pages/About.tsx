import { Block } from "../components/blocks/Blocks"
import { Text } from "../components/texts/Texts"

interface iAbout {
  tag: string,
  title: string,
  body: string
}

const About = (prop: iAbout) => (
  <section id="about" className="block-blue">
    <Text name="text-title" type='h1'>{prop.tag}</Text>
    <Block name="block-about">
      <Block name="image"/>
      <Text
        type="h1"
        name="text-big"
        children={prop.title}
      />
      <Text type='p' name="text-normal">{prop.body}</Text>
    </Block>
  </section>
)

export default About