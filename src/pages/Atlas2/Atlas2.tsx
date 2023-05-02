import { Button } from "../../components/buttons/Buttons"
import { Icon } from "../../components/icons/Icons"
import { H1, H2 } from "../../components/texts/Texts"
import { DivRef } from "../../functions/types"
import { setExit } from "../../functions/utils"
import data from "../../secondPage.json"
import "./Atlas2.css"

type Atlas2Type = {
  blockRef: DivRef,
  decrement: () => void,
  increment: () => void,
  hideNav: (s: () => void) => void
}

const atlas2 = data.atlas2

const Atlas2 = (prop: Atlas2Type) => {
  const {blockRef, decrement, increment, hideNav} = prop

  return (
    <section ref={blockRef} className="atlas2 block-black" id="atlas2">  
      <H1 name="title-big">Atlas</H1>
      <H1 name="title-big">Computing</H1>
      <H2 name="subtitle-big" >{atlas2.subtitle[0]}</H2>
      <H2 name="subtitle-big" >{atlas2.subtitle[1]}</H2>
      <div className="wrapper-button">
        <Button
          name="button-white"
          text="Continuar"
          func={{onClick: () => setExit(blockRef, 1500, increment)}}
        />
        <Button
          name="button-black"
          text="Voltar"
          func={{onClick: () => hideNav(() => setExit(blockRef, 1500, decrement))}}
        />
      </div>
      <Icon name="ColumnFirst"/>
      <Icon name="ColumnSecond"/>
    </section>
  ) 
}

export default Atlas2