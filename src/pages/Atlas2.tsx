import { useRef, useState } from "react"
import { Block } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"
import { ExitType } from "../functions/function.types"
import { setOnExit, useSetDisplay, useSetOnEnter } from "../functions/utils"

type Atlas2Type = {
  data: {
    subtitle: string[]
  },
  displayActive: number,
  getIsDisplay: (e: number) => boolean,
  decrement: () => void,
  increment: () => void
}

const Atlas2 = (prop: Atlas2Type) => {
  const {data, displayActive, getIsDisplay, decrement, increment} = prop

  const [time , setTime] = useState<NodeJS.Timeout>()

  const ref = useRef<HTMLDivElement>(null!)  

  const firstOnExitOptions: ExitType = {
    ref, 
    delayFirst: 1500, 
    delaySecond: 250, 
    isLast: getIsDisplay(displayActive + 1), 
    doNext: increment
  }
  const secondOnExitOptions: ExitType = {
    ref, 
    delayFirst: 1500, 
    delaySecond: 250, 
    isLast: getIsDisplay(displayActive - 1), 
    doNext: decrement
  }

  useSetDisplay(ref, getIsDisplay(displayActive))
  useSetOnEnter({
    delayFirst: 1500,
    delaySecond: 250,
    displayActive,
    ref,
    time,
    setTime,
    getIsDisplay
  })
  
  return (
    <section 
      ref={ref} 
      className="atlas2 block-black"
      id="atlas2" 
    >  
      <Text 
        type='h1' 
        name="text-big-title" 
        children="Atlas"
      />
      <Text 
        type='h1' 
        name="text-big-title" 
        children="Computing"
      />
      <Text 
        type='h2' 
        name="text-big-subtitle" 
        children={data.subtitle[0]}
      />
      <Text 
        type='h2' 
        name="text-big-subtitle" 
        children={data.subtitle[1]}
      />
      <Block type="div" name="block-wrapper-button">
        <Button
          type="h2"
          name="button-white"
          ariaLabel="Continuar"
          textName="text-bold-small"
          text="Continuar"
          func={{onClick: () => setOnExit(firstOnExitOptions)}}
        />
        <Button
          type="h2"
          name="button-black"
          ariaLabel="Voltar"
          textName="text-bold-small"
          text="Voltar"
          func={{onClick: () => setOnExit(secondOnExitOptions)}}
        />
      </Block>
      <Icon name="ColumnFirst"/>
      <Icon name="ColumnSecond"/>
    </section>
  ) 
}

export default Atlas2