import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

type EnterType = {
  subtitle: string
}

const Enter = (prop: EnterType) => (
  <section id="enter" className="block-black">
    <Icon 
      name="ColumnFirst"
    />
    <Icon 
      name="ColumnSecond"
    />
    <Text 
      type='h1' 
      name="text-big-title" 
      children="Atlas"
    />
    <Text 
      type='h1' 
      name="text-big-title" 
      children="Computing"
    />
    <Text 
      type='h2' 
      name="text-big-subtitle" 
      children={prop.subtitle}
    />
  </section>
)

export default Enter