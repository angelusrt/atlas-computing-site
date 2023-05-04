import Link from "next/link"
import { Icon } from "../../components/icons/Icons"
import { H1, P } from "../../components/texts/Texts"
import data from "../../firstPage.json"
import "./World.css"

const world = data.world

const World = () => (
  <section id="world">
    <H1 name="title">{world.tag}</H1>
    <P name="subtitle-big">{world.title}</P>
    <Link className="link button-black" href="/construction" aria-label="Próxima página">
      <Icon name="Arrow"/>
    </Link>
  </section>
)

export default World