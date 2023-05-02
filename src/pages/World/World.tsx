import { Button } from "../../components/buttons/Buttons"
import { H1, P } from "../../components/texts/Texts"
import data from "../../firstPage.json"
import "./World.css"

type WorldType = {
  setPage: () => void
}

const world = data.world

const World = (prop: WorldType) => (
  <section id="world">
    <H1 name="title">{world.tag}</H1>
    <P name="subtitle-big">{world.title}</P>
    <Button isIcon name="button-black" ariaLabel="Próxima página" func={{onClick: prop.setPage}}/>
  </section>
)

export default World