import { Link } from "../../components/buttons/Buttons"
import { H2 } from "../../components/texts/Texts"
import data from "../../firstPage.json"
import "./Footer.css"

const footer = data.footer 

const Footer = () => {
  return(
    <footer id="footer" className="block-black"> 
      {footer.buttons.map((e, i) => 
        <Link key={i} isNewTab={true} href={e.href} text={e.title}/>
      )}
      <H2 name="text-thin-small">{footer.body}</H2>
    </footer>
  )
}

export default Footer