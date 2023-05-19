import Link from "next/link"
import { useContext } from "react"
import { Icon } from "../../components/icons/Icons"
import { H1, P } from "../../components/texts/Texts"
import { langContext } from "../layout"
import data from "../../data/firstPage.json"
import "./World.css"

const World = () => {
  const {lang} = useContext(langContext)
  const world = data[lang].world

  return (
    <section id="world">
      <H1 name="title">{world.tag}</H1>
      <P name="subtitle-big">{world.title}</P>
      <Link className="link button-black" href="/construction" aria-label="Próxima página">
        <Icon name="Arrow"/>
      </Link>
    </section>
  )
}

export default World