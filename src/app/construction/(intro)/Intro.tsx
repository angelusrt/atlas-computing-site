"use client"

import { useContext } from "react"
import { Button } from "../../../components/buttons/Buttons"
import { H1, H2 } from "../../../components/texts/Texts"
import { setExit } from "../../../functions/utils"
import { langContext } from "../../layout"
import data from "../../../data/secondPage.json"
import "./Intro.css"

type IntroType = {
  index: number,
  blockRef: React.MutableRefObject<HTMLDivElement>,
  decrement: () => void,
  increment: () => void
}

const Intro = ({blockRef, index, decrement, increment}: IntroType) => {
  const {lang} = useContext(langContext)
  const intro = data[lang].intro.itens
  const buttons = data[lang].intro.buttons
  
  const name: string = "intro intro--none "
  const isBlack = intro[index].theme === "block-black"
 
  return (
    <section ref={blockRef} id={intro[index].tag} className={name + intro[index].theme}>
      <H1 name="text-big">{intro[index].title}</H1>
      <H2 name="text-thin">{intro[index].subtitle}</H2>
      <H2 name="text-normal">{intro[index].body}</H2>
      <Button 
        text={buttons[0]}
        name={isBlack ? "button-white" : "button-black"}
        onClick={() => setExit(blockRef, 1000, increment)}
      />
      <Button 
        text={buttons[1]} 
        name="button-transparent"
        onClick={() => setExit(blockRef, 1000, decrement)}
      />
    </section>
  )
}

export default Intro