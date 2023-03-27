import { useRef } from "react"
import { InfoBlock } from "../components/blocks/Blocks"
import { useSetDisplay } from "../functions/utils"

type TutorialType = {
  data: any,
  displayActive: number,
  getIsDisplay: (e: number) => boolean, 
  decrement: () => void,
  increment: () => void,
}

const Tutorial = (prop: TutorialType) => {
  const {data, displayActive, getIsDisplay, decrement, increment} = prop

  const ref = useRef<HTMLDivElement>(null!)

  useSetDisplay(ref, getIsDisplay(displayActive))

  return (
    <section 
      id="tutorial" 
      className="section block-white"
      ref={ref}
    >
      <InfoBlock
        title={data.title}
        subtitle={data.subtitle}
        body={data.body}
        displayActive={displayActive}
        getIsDisplay={getIsDisplay}
        decrement={decrement}
        increment={increment} 
      />
    </section>

  ) 
}

export default Tutorial