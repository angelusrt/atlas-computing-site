import { useRef } from "react"
import { IntroBlock } from "../components/blocks/Blocks"
import { useSetDisplay } from "../functions/utils"

type IntroType = {
  data: any,
  displayActive: number,
  getIsDisplay: (e: number) => boolean,
  decrement: () => void,
  increment: () => void
}

const Intro = (prop: IntroType) => {
  const { 
    data, displayActive, getIsDisplay, decrement, increment
  } = prop

  const ref = useRef<HTMLElement>(null!)

  useSetDisplay(ref, getIsDisplay(displayActive))

  return (
    <section
      ref={ref} 
      id={data.tag}
      className={"section intro " + data.theme}
    >
      <IntroBlock
        title={data.title}
        subtitle={data.subtitle}
        body={data.body}
        iconName={data.iconName}
        displayActive={displayActive}
        getIsDisplay={getIsDisplay}
        decrement={decrement}
        increment={increment}
      />
    </section>
  )
}

export default Intro