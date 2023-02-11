import { Block, InfoBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import data from "../data.json"

function Discover(){
  return(
    <section id="discover">
      <Button
        type="h1"
        color="black"
        text={data.discover.tag}
      />
      <Block name="block-discover">
        <Icon name="Recife"/>
        <InfoBlock
          title={data.discover.info[0].title}
          subtitle={data.discover.info[0].subtitle}
          color="white"
        />
      </Block>
      <Block name="block-discover">
        <Icon name="Cables"/>
        <InfoBlock
          title={data.discover.info[1].title}
          subtitle={data.discover.info[1].subtitle}
          color="white"
        />
      </Block>
    </section>
  )
}

export {Discover}