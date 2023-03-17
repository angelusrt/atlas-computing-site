import { Link } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"

type FooterType = {
  buttons: {
    title: string,
    href: string
  }[],
  body: string
}

const Footer = (prop: FooterType) => {
  const {buttons, body} = prop
  
  const Links = buttons.map((i, id) => 
    <Link 
      isNewTab={true}
      key={id}
      href={i.href}
      text={i.title}
      ariaLabel={i.title}
    />
  )

  return(
    <footer id="footer" className="block-black">
      {Links}
      <Text
        type="h2"
        name="text-thin-small"
        children={body}
      />
    </footer>
  )
}

export default Footer