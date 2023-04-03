import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"
import data from "../firstPage.json"

type WorldType = {
  setPage: () => void
}

const world = data.world

const World = (prop: WorldType) => (
  <section id="world">
    <Text name="text-title" type='h1' children={world.tag}/>
    <Text name="text-big-subtitle" type='p' children={world.title}/>
    <Button
      type='h2'
      name="button-black"
      ariaLabel="Próxima página"
      func={{onClick: prop.setPage}}
      children={<Icon name="Arrow"/>}
    />
  </section>
)

export default World