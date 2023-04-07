import { useEffect, useState } from "react"
import { Block } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"
import { setExit, setTransEnter, setTransExit } from "../functions/utils"
import data from "../secondPage.json"

type TutorialType = {
  blockRef: React.MutableRefObject<HTMLDivElement>,
  decrement: () => void,
  increment: () => void,
}

const tutorial = data.tutorial
const name = "block-info section block-white block-info--none"

const Tutorial = (prop: TutorialType) => {
  const {blockRef, decrement, increment} = prop

  const [index, setIndex] = useState(0)

  const tuto = tutorial[index]

  function goBack() {
    index === 0 ? 
    setExit(blockRef, 1000, decrement) : 
    setTransEnter(blockRef, 250, () => setIndex(s => s - 1))
  }

  function goForward() {
    index === 2 ? 
    setExit(blockRef, 1000, increment) : 
    setTransEnter(blockRef, 250, () => setIndex(s => s + 1))
  }

  useEffect(() => {setTransExit(blockRef, 250)}, [index])

  return (
    <section id="tutorial" className={name} ref={blockRef}>
      <Block type="div" name="block-wrapper-button">
        <Button
          type="h2"
          name="button-transparent"
          ariaLabel="Voltar"
          textName="text-bold-small"
          func={{onClick: goBack}}
          children={<Icon name="Arrow"/>}
        />
        <Button
          type="h2"
          name="button-transparent"
          ariaLabel="Continuar"
          textName="text-bold-small"
          func={{onClick: goForward}}
          children={<Icon name="Arrow"/>}
        />
      </Block>
      <Text type="h2" name="text-thin-small" children={tuto.subtitle}/>
      <Text type="h1" name="text-big" children={tuto.title}/>
      <Text type="h2" name="text-thin" children={tuto.body}/>
    </section>
  ) 
}

export default Tutorial