import { Icon } from "../../components/icons/Icons"
import { H1 } from "../../components/texts/Texts"
import data from "../../firstPage.json"
import "./Discover.css"

const discover = data.discover

const Discover = () => (
  <section id="discover" className="block-black">
    <H1 name="title">{discover.tag}</H1>
    <Icon name="Recife"/>
    <H1 name="subtitle-big">Recife</H1>
  </section>
)

export default Discover