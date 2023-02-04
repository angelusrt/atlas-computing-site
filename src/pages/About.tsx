import { Block } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"

function About(): JSX.Element{
  return(
    <section>
      <Button
        type='h1'
        color='white'
        text='Seu'
      />
      <Block name="block-horizontal">
        <Block name="block-wrapper">
          <Block
            name="block-about-image"
          />
          <Text
            type="h1"
            name="text-project-title"
            children="Idealização"
            />
        </Block>
        <Block name="block-wrapper">
          <Text type='p'>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
          </Text>
          <Text type='p'>
            Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute 
            irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur.
          </Text>
        </Block>
    </Block>
    </section>
  )
}

export{About}