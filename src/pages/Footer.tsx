import { Link } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

const Footer = () => (
  <footer id="footer">
    {
      data.footer.buttons.map(
        (item, index) => 
        <Link 
          isNewTab={true}
          name="button-link button-black"
          textName="text-button-white"
          key={index}
          href={item.href}
          text={item.title}
        />
      )
    }
    <Text
      type="h2"
      name="text-footer-body"
      children={data.footer.body}
    />
  </footer>
)

export default Footer