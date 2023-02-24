import { Block } from "./Blocks"
import { NavButton } from "../buttons/Buttons"

const Nav = (prop: {setToggle: () => void}) => (
  <nav>
    <Block name="block-wrapper">
      <NavButton
        name="button-nav"
        textName="text-nav"
      />
    </Block>
  </nav>
)

const EnterNav = (prop: {setToggle: () => void}) => (
  <nav>
    <NavButton 
      name="button-enter-nav"
      textName="text-nav"
    />
  </nav>
)

export {Nav, EnterNav}