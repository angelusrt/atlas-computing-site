import { Link } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"

interface iFooter {
  buttons: {
    title: string,
    href: string
  }[],
  body: string
}

const Footer = (prop: iFooter) => (
  <footer id="footer" className="block-black">
    {
      prop.buttons.map(
        (item, index) => 
        <Link 
          isNewTab={true}
          key={index}
          href={item.href}
          text={item.title}
        />
      )
    }
    <Text
      type="h2"
      name="text-thin-small"
      children={prop.body}
    />
  </footer>
)

export default Footer