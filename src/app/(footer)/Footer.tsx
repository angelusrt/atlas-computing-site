"use client"

import { useContext } from "react"
import { Link } from "../../components/buttons/Buttons"
import { H2 } from "../../components/texts/Texts"
import { langContext } from "../layout"
import data from "../../data/firstPage.json"
import "./Footer.css"


const Footer = () => {
  const {lang} = useContext(langContext)
  const footer = data[lang].footer 

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