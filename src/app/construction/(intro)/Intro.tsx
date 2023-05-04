import { Button } from "../../../components/buttons/Buttons"
import { H1, H2 } from "../../../components/texts/Texts"
import { setExit } from "../../../functions/utils"
import data from "../../../secondPage.json"
import "./Intro.css"

type IntroType = {
  index: number,
  blockRef: React.MutableRefObject<HTMLDivElement>,
  decrement: () => void,
  increment: () => void
}

const intro = data.intro
const name: string = "intro intro--none "

const Intro = (prop: IntroType) => {
  const {blockRef, index, decrement, increment} = prop

  const isBlack = intro[index].theme === "block-black"
 
  return (
    <section ref={blockRef} id={intro[index].tag} className={name + intro[index].theme}>
      <H1 name="text-big">{intro[index].title}</H1>
      <H2 name="text-thin">{intro[index].subtitle}</H2>
      <H2 name="text-normal">{intro[index].body}</H2>
      <Button 
        text="Continuar" 
        name={isBlack ? "button-white" : "button-black"}
        func={{onClick: () => setExit(blockRef, 1000, increment)}}
      />
      <Button 
        text="Voltar" 
        name="button-transparent"
        func={{onClick: () => setExit(blockRef, 1000, decrement)}}
      />
    </section>
  )
}

export default Intro