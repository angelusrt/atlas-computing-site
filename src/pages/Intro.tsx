import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

import { setExit } from "../functions/utils"

import data from "../secondPage.json"

type IntroType = {
  index: number,
  blockRef: React.MutableRefObject<HTMLDivElement>,
  decrement: () => void,
  increment: () => void
}

const intro = data.intro

const Intro = (prop: IntroType) => {
  const {blockRef, index, decrement, increment} = prop

  const name: string = "block-intro block-intro--none"

  const isBlack = intro[index].theme === "block-black"
 
  return (
    <section ref={blockRef} id={intro[index].tag} className={name}>
      <Icon name={intro[index].iconName}/>
      <Text type="h1" name="text-big" children={intro[index].title}/>
      <Text type="h2" name="text-thin" children={intro[index].subtitle}/>
      <Text type="h2" name="text-normal" children={intro[index].body}/>
      <Button 
        type="h2" 
        ariaLabel="Continuar" 
        text="Continuar" 
        textName="text-bold-small"
        name={isBlack ? "button-white" : "button-black"}
        func={{onClick: () => setExit(blockRef, increment, 1000)}}
      />
      <Button 
        type="h2" 
        ariaLabel="Voltar" 
        text="Voltar" 
        textName="text-bold-small"
        name="button-transparent"
        func={{onClick: () => setExit(blockRef, decrement, 1000)}}
      />
    </section>
  )
}

export default Intro