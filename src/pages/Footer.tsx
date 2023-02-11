import { Link } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

function Footer(){
  return (
    <footer id="footer">
      {
        data.footer.buttons.map((item, index) => 
          <Link 
            isNewTab={true}
            key={index}
            href={item.href}
            color="black"
            text={item.title}
          />
        )
      }
      <Text
        type="h2"
        name="text-footer-body text-footer"
        children={data.footer.body}
      />
    </footer>
  )
}

export{Footer}