import { Block } from "../components/blocks/Blocks"
import { Link } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"

function Footer(){
  return (
    <footer>
      <Link 
        href="#"
        color="black"
        text="Placeholder"
      />
      <Link
        href="#" 
        color="black"
        text="Placeholder"
      />
      <Link
        href="#" 
        color="black"
        text="Placeholder"
      />
      <Link
        href="#" 
        color="black"
        text="Placeholder"
      />
      <Text
        type="h2"
        name="text-footer-body text-footer"
        children="Placeholder"
      />
    </footer>
  )
}

export{Footer}