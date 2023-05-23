import { useContext } from "react"
import { H1 } from "../../components/texts/Texts"
import { langContext } from "../layout"
import data from "../../data/firstPage.json"
import "./Discover.css"

const Discover = () => {
  const {lang} = useContext(langContext)
  const discover = data[lang].discover

  return(
    <section id="discover" className="block-black">
      <H1 name="title">{discover.tag}</H1>
      <img src="/Recife.png" className="svg-recife"/>
      <H1 name="subtitle-big">Recife</H1>
    </section>
  )
}

export default Discover
