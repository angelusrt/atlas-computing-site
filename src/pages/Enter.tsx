import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

interface iEnter {
  subtitle: string
}

const Enter = (prop: iEnter) => (
  <section id="enter" className="block-black">
    <Icon name="ColumnFirst"/>
    <Icon name="ColumnSecond"/>
    <Text type='h1' name="text-big-title">Atlas</Text>
    <Text type='h1' name="text-big-title">Computing</Text>
    <Text type='h2' name="text-big-subtitle">
      {prop.subtitle}
    </Text>
  </section>
)

export default Enter