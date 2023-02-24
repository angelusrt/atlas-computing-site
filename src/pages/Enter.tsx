import { EnterNav } from "../components/blocks/Nav"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

const Enter = (prop: {setToggle: () => void}) => (
  <section id="enter" className="block-black">
    <EnterNav setToggle={prop.setToggle}/>
    <Icon name="ColumnFirst"/>
    <Icon name="ColumnSecond"/>
    <Text type='h1' name="text-enter-title">
      {data.enter.title[0]}
    </Text>
    <Text type='h1' name="text-enter-title">
      {data.enter.title[1]}
    </Text>
    <Text type='h2' name="text-enter-subtitle">
      {data.enter.subtitle}
    </Text>
  </section>
)

export default Enter