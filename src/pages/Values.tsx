import { Block } from "../components/blocks/Blocks"
import { ExpandedType } from "../components/blocks/Blocks.types"
import { Button } from "../components/buttons/Buttons"
import { Canvas } from "../components/canvas/Canvas"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

type ValuesType = {
  valuesTag: string,
  values: string[],
  currentValue: number,
  isMobile: boolean,
  blockRef: React.LegacyRef<HTMLElement>,
  setCurrentValue: (state: number) => void,
  setIsExpanded: (state: ExpandedType) => void
}

const dic = [
  'Hat', 'Palm', 'Rock', 'Clarinete'
]

const Values = (prop: ValuesType) => {
  const {
    blockRef, currentValue, isMobile, values, valuesTag, 
    setCurrentValue, setIsExpanded
  } = prop
  
  const decrement = () => (
    currentValue > 0 ?
    setCurrentValue(currentValue - 1):
    setIsExpanded('expand-out')
  )
  const increment = () => (
    currentValue < 3 ?
    setCurrentValue(currentValue + 1):
    setIsExpanded('expand-out')
  )

  return (
    <section ref={blockRef} id="values">
      <Block name="block-wrapper-content">
        <Text
          type="h1"
          name="text-title"
          children={valuesTag}
        />
        <Block name="block-wrapper-button">
          <Button
            type="h2"
            name="button-white"
            ariaLabel="Voltar"
            func={{onClick: decrement}}
            children={
              <Icon name="arrow"/>
            }
          />
          <Button
            type="h2"
            name="button-white"
            ariaLabel="Próximo"
            func={{onClick: increment}}
            children={
              <Icon name="arrow"/>
            }
          />
        </Block>
        <Text 
          type='h1' 
          name="text-big-subtitle"
          children={values[currentValue]}
        /> 
      </Block>
      <Canvas 
        isMobile={isMobile} 
        name="canvas-values"
      />
      <Icon name={dic[currentValue]}/>
      <Icon name={dic[currentValue]}/>
    </section>
  )
}

export {Values}