import React from "react"
import { Link } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"
import data from "../firstPage.json"

const footer = data.footer 

const Footer = () => {
  return(
    <footer id="footer" className="block-black"> 
      {footer.buttons.map((e, i) => 
        <Link 
          isNewTab={true}
          key={i}
          href={e.href}
          text={e.title}
          ariaLabel={e.title}
        />
      )}
      <Text type="h2" name="text-thin-small" children={footer.body}/>
    </footer>
  )
}

export default Footer