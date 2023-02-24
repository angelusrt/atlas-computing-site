import { Button, NavButton } from "../components/buttons/Buttons"
import { Globe } from "../components/canvas/Canvas"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

const Intro = (prop: {setToggle: () => void}) => (
  <section id="intro" className="block-white">
    <Globe/>
    <Text type='h1' name="text-intro-title">
      {data.intro.title[0]}
    </Text>
    <Text type='h1' name="text-intro-title">
      {data.intro.title[1]}
    </Text>
    <Text type='h2' name="text-intro-subtitle">
      {data.intro.subtitle}
    </Text>
    <Button
      type='h2'
      name="button-intro button-icon button-black"
      func={{onClick: prop.setToggle}}
      children={<Icon name="Arrow"/>}
    />
    <NavButton
      name="button-nav"
      textName="text-nav"
    />
  </section>
)

export default Intro