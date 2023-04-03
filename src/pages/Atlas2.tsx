import { Block } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"
import { DivRef } from "../functions/function.types"
import { setExit } from "../functions/utils"
import data from "../secondPage.json"

type Atlas2Type = {
  blockRef: DivRef,
  decrement: () => void,
  increment: () => void
}

const atlas2 = data.atlas2

const Atlas2 = (prop: Atlas2Type) => {
  const {blockRef, decrement, increment} = prop

  return (
    <section ref={blockRef} className="atlas2 block-black" id="atlas2">  
      <Text type='h1' name="text-big-title" children="Atlas"/>
      <Text type='h1' name="text-big-title" children="Computing"/>
      <Text type='h2' name="text-big-subtitle" children={atlas2.subtitle[0]}/>
      <Text type='h2' name="text-big-subtitle" children={atlas2.subtitle[1]}/>
      <Block type="div" name="block-wrapper-button">
        <Button
          type="h2"
          name="button-white"
          ariaLabel="Continuar"
          textName="text-bold-small"
          text="Continuar"
          func={{onClick: () => setExit(blockRef, increment, 1500)}}
        />
        <Button
          type="h2"
          name="button-black"
          ariaLabel="Voltar"
          textName="text-bold-small"
          text="Voltar"
          func={{onClick: () => setExit(blockRef, decrement, 1500)}}
        />
      </Block>
      <Icon name="ColumnFirst"/>
      <Icon name="ColumnSecond"/>
    </section>
  ) 
}

export default Atlas2