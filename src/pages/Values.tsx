import { Block, Canvas } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"
import { Text } from "../components/texts/Texts"

type ValuesType = {
  valuesTag: string,
  values: string[],
  currentValue: number,
  isMobile: boolean,
  blockRef: React.LegacyRef<HTMLElement>,
  increment: () => void,
  decrement: () => void,
}

const Values = (prop: ValuesType) => {
  const {
    blockRef, currentValue, isMobile, values, valuesTag, 
    increment, decrement
  } = prop
  
  return (
    <section ref={blockRef} id="values" className="block-wrapper">
      <Block type="div" name="block-wrapper-content">
        <Text
          type="h1"
          name="text-title"
          children={valuesTag}
        />
        <Text 
          type='h1' 
          name="text-big-subtitle"
          children={values[currentValue]}
        /> 
        <Block type="div" name="block-wrapper-button">
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
      </Block>
      <Canvas 
        isMobile={isMobile} 
        name="canvas-values"
      />
    </section>
  )
}

export default Values