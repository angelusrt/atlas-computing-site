import { useEffect, useRef, useState } from "react"
import { Block, InfoBlock, InputBlock, SelectBlock, SelectExpandedBlock } from "../components/blocks/Blocks"
import { BlockErrorType, ExpandedType, StyleType } from "../components/blocks/Blocks.types"
import { add, addPos, getStyle, remove, setAnimation, setOnExit, toggleScrollOnExpanded, useSetDisplay, useSetOnEnter } from "../functions/utils"
import { ExitType } from "../functions/function.types"
import { Err, Ok, Result} from "ts-results"

type FormsType = {
  inputs: {
    text: string,
    name: string,
    type: string,
  }[],
  selections: {
    text: string, 
    name: string,
    optionList: {
      text: string,
      name: string
    }[]  
  }[],
  infos: {
    title: string,
    subtitle: string,
    body: string
  }[],
  isMobile: boolean,
  index: number,
  displayActive: number,
  getIsDisplay: (e: number) => boolean, 
  decrement: () => void,
  increment: () => void,
}

const Forms = (prop: FormsType) => {
  const {
    isMobile, infos, inputs, selections, displayActive, index,
    getIsDisplay, increment, decrement
  } = prop

  const [time , setTime] = useState<NodeJS.Timeout>()
  const [labelActive, setLabelActive] = useState(-1)
  const [isExpanded, setIsExpanded] = useState<ExpandedType>('unset')
  const [style, setStyle] = useState<StyleType>()

  const ref = useRef<HTMLDivElement>(null!)
  const formRef = useRef<HTMLElement>(null!)
  const firstFormRef = useRef<HTMLElement>(null!)
  const secondFormRef = useRef<HTMLElement>(null!)
  const selectedExpandedRef = useRef<HTMLElement>(null!)

  const firstOnExitOptions: ExitType = {
    ref: formRef, 
    delayFirst: 700, 
    delaySecond: 450, 
    isLast: getIsDisplay(displayActive + 1), 
    doNext: () => {
      increment()
      setIsExpanded('expand-out')
    }
  }
  const secondOnExitOptions: ExitType = {
    ref: formRef, 
    delayFirst: 700, 
    delaySecond: 450, 
    isLast: getIsDisplay(displayActive - 1), 
    doNext: () => {
      decrement()
      setIsExpanded('expand-out')
    }
  }

  const selectActive = labelActive > 0 ? labelActive - 1 : 0
  
  function setActive(active: number) {
    setLabelActive(active)
    setIsExpanded('expand-enter')
  }
  function setNotActive() {
    setIsExpanded('expand-out')
  }

  function setSelectText(id: number): Result<"Successfull", BlockErrorType> {
    let form: HTMLElement
    let index: number

    if(labelActive < 3){
      form = firstFormRef.current
      index = labelActive
    }
    else{
      form = secondFormRef.current
      index = labelActive - 3
    }

    if(!form) return Err("BLOCK_DOESNT_EXIST")

    const blockLabel = form.children.item(index)

    if(!blockLabel) return Err("BLOCK_DOESNT_EXIST")
    
    const select = blockLabel.getElementsByTagName('select')[0]

    if(!select) return Err("BLOCK_DOESNT_EXIST")

    select.selectedIndex = id + 1

    const blockSelected = blockLabel.getElementsByClassName('block-selected')[0]

    if(!blockSelected) return Err("BLOCK_DOESNT_EXIST")

    const textSelected = blockSelected.children.item(0)

    if(!textSelected) return Err("BLOCK_DOESNT_EXIST")
    
    textSelected.innerHTML = selections[selectActive].optionList[id].text

    return Ok("Successfull")
  }

  useEffect(() => {
    const classList = selectedExpandedRef.current.classList

    setAnimation({
      onEnter: () => {
        addPos(selectedExpandedRef, getStyle(style))
        add(classList, "--enter")  
      },
      onEnterTimeout: () => {
        add(classList, "--show")
      },
      onExit: () => {
        remove(classList, "--show")  
      },
      onExitTimeout: () => {
        remove(classList, "--enter")
        setIsExpanded('unset')
        setLabelActive(-1)
      },
      exitTimeoutTime: 800,
      isExpanded
    })

    toggleScrollOnExpanded(isExpanded)
  },[isExpanded])

  useSetDisplay(ref, getIsDisplay(displayActive))
  useSetDisplay(firstFormRef, index === 0)
  useSetDisplay(secondFormRef, index === 1)
  
  useSetOnEnter({
    delayFirst: 1200,
    delaySecond: 450,
    displayActive,
    ref: formRef,
    time,
    setTime,
    getIsDisplay
  })

  return (
    <section 
      ref={ref} 
      className="section forms block-black"
      id="forms" 
    >
      <InfoBlock
        body={infos[index].body}
        subtitle={infos[index].subtitle}
        title={infos[index].title}
        displayActive={displayActive}
        getIsDisplay={getIsDisplay}
        increment={() => setOnExit(firstOnExitOptions)}
        decrement={() => setOnExit(secondOnExitOptions)}
      />
      <Block 
        type="form" 
        blockRef={formRef} 
        name="block-form"
      >
        <Block 
          type="div"
          blockRef={firstFormRef} 
          name="block-wrapper-form block-black"
        >
          <InputBlock
            name={inputs[0].name}
            text={inputs[0].text}
            type={inputs[0].type}
          />
          <SelectBlock
            name={selections[0].name}
            optionList={selections[0].optionList}
            text={selections[0].text}
            setIsActive={() => setActive(1)}
            setStyle={s => setStyle(s)}
            isMobile={isMobile}
          />
          <SelectBlock
            name={selections[1].name}
            optionList={selections[1].optionList}
            text={selections[1].text}
            setIsActive={() => setActive(2)}
            setStyle={s => setStyle(s)}
            isMobile={isMobile}
          />
        </Block>
        <Block 
          type="div"
          blockRef={secondFormRef}
          name="block-wrapper-form block-black"
        >
          <SelectBlock
            name={selections[2].name}
            optionList={selections[2].optionList}
            text={selections[2].text}
            setIsActive={() => setActive(3)}
            setStyle={s => setStyle(s)}
            isMobile={isMobile}
          />
          <SelectBlock
            name={selections[3].name}
            optionList={selections[3].optionList}
            text={selections[3].text}
            setIsActive={() => setActive(4)}
            setStyle={s => setStyle(s)}
            isMobile={isMobile}
          />
          <SelectBlock
            name={selections[4].name}
            optionList={selections[4].optionList}
            text={selections[4].text}
            setIsActive={() => setActive(5)}
            setStyle={s => setStyle(s)}
            isMobile={isMobile}
          />
        </Block>
        <SelectExpandedBlock
          blockRef={selectedExpandedRef}
          text={selections[selectActive].text}
          optionList={selections[selectActive].optionList}
          isDisplay={labelActive !== -1}
          setSelectText={(id) => setSelectText(id)}
          setIsActive={() => setNotActive()}
        />
      </Block>
    </section>
  ) 
}

export default Forms