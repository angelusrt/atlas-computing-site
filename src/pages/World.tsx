import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

type WorldType = {
  tag: string,
  title: string
}

const World = (prop: WorldType) => (
  <section id="world">
    <Text 
      name="text-title" 
      type='h1'
      children={prop.tag}
    />
    <Text 
      name="text-big-subtitle" 
      type='p'
      children={prop.title}
    />
    <Button
      type='h2'
      name="button-black"
      ariaLabel="Próxima página"
      children={
        <Icon name="Arrow"/>
      }
    />
  </section>
)

export default World