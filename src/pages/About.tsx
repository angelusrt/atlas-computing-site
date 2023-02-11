import { Block } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

function About(): JSX.Element{
  return(
    <section id="about">
      <Button
        type='h1'
        color='white'
        text={data.about.tag}
      />
      <Block name="block-horizontal">
        <Block name="block-wrapper">
          <Block
            name="block-about-image"
          />
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
          <Text type='p'>
            {data.about.body[1]}
          </Text>
        </Block>
    </Block>
    </section>
  )
}

export{About}