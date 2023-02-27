import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

interface iWorld {
  tag: string,
  title: string
}

const World = (prop: iWorld) => (
  <section id="world">
    <Text name="text-title" type='h1'>{prop.tag}</Text>
    <Text name="text-big-subtitle" type='p'>{prop.title}</Text>
    <Button
      type='h2'
      name="button-black"
      children={<Icon name="Arrow"/>}
    />
  </section>
)

export default World