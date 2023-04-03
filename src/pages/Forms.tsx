import { createContext, useContext, useEffect, useRef, useState } from "react"

import { Text } from "../components/texts/Texts"
import { Block, DropdownBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Icon } from "../components/icons/Icons"

import { add, remove, setExit, setSelectText, setTransEnter, setTransExit } from "../functions/utils"
import { bodyStyle, DivRef, HTMLRef, OptionListType } from "../functions/function.types"
import data from "../secondPage.json"

type FormsType = {
  blockRef: DivRef,
  decrement: () => void,
  increment: () => void,
}

type InputType = {
  text: string,
  name: string,
  type: React.HTMLInputTypeAttribute,
}

type SelectType = {
  item: {
    text: string,
    name: string,
    optionList: OptionListType
  },
  setRef: (s: React.MutableRefObject<HTMLElement>) => void
  setItem: () => void,
}

const form = data.forms
const name = "block-forms section block-black block-forms--none"
const expandedName = "block-form-expanded block-select"

const refContext = createContext<HTMLRef>(null!)

const Forms = (prop: FormsType) => {
  const {blockRef, increment, decrement} = prop
  
  const [index, setIndex] = useState(0)
  const [item, setItem] = useState(-1)
  const [ref, setRef] = useState<HTMLRef>()

  const parentRef = useRef<HTMLElement>(null!)
  const expandedRef = useRef<HTMLElement>(null!)
  const wrapperRef = useRef<HTMLDivElement>(null!)

  const formActive = form.selections[item > 0 ? item - 1 : 0]

  function goBack() {
    index === 0 ? 
    setExit(blockRef, decrement, 700) : 
    setTransEnter(blockRef, () => setIndex(0), 450)
  } 
  function gorFoward() {
    index === 1 ? 
    setExit(blockRef, increment, 700) : 
    setTransEnter(blockRef, () => setIndex(1), 450)
  }

  function expandOut(func: () => void) {
    const block = ref?.current 

    if(!block) return undefined

    const expanded = expandedRef.current

    remove(expanded.classList, "--show")

    setTimeout(() => {
      remove(expanded.classList, "--enter")

      document.body.setAttribute("style", bodyStyle[0])

      add(expanded.classList, "--none")

      func()
    }, 485)
  }

  useEffect(() => {
    setTransExit(blockRef, 450)

    const parent = parentRef.current

    if(index === 0)
      remove(parent.classList, "--next")
    else 
      add(parent.classList, "--next")
  }, [index])

  return (
    <section ref={blockRef} className={name} id="forms">
      <Block type="div" name="block-info">
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
            func={{onClick: gorFoward}}
            children={<Icon name="Arrow"/>}
          />
        </Block>
        <Text type="h2" name="text-thin-small">
          {form.infos[index].subtitle}
        </Text>
        <Text type="h1" name="text-big">
          {form.infos[index].title}
        </Text>
        <Text type="h2" name="text-thin">
          {form.infos[index].body}
        </Text>
      </Block>
      <Block type="form" blockRef={parentRef} name="block-form">
        <refContext.Provider value={expandedRef}>
          <InputBlock
            name={form.inputs[0].name}
            text={form.inputs[0].text}
            type={form.inputs[0].type}
          />
          <SelectBlock
            item={form.selections[0]}
            setItem={() => setItem(1)}
            setRef={(s) => setRef(s)}
          />
          <SelectBlock
            item={form.selections[1]}
            setItem={() => setItem(2)}
            setRef={(s) => setRef(s)}
          />
          <SelectBlock
            item={form.selections[2]}
            setItem={() => setItem(3)}
            setRef={(s) => setRef(s)}
          />
          <SelectBlock
            item={form.selections[3]}
            setItem={() => setItem(4)}
            setRef={(s) => setRef(s)}
          />
          <SelectBlock
            item={form.selections[4]}
            setItem={() => setItem(5)}
            setRef={(s) => setRef(s)}
          />
        </refContext.Provider>
        <Block type="div" blockRef={expandedRef} name={expandedName}>
          <Block blockRef={wrapperRef} type="div" name="block-wrapper">
            <Text type="h2" name="text-thin-small">
              {formActive.text}
            </Text>
            <DropdownBlock toggle={item !== -1}>
              {formActive.optionList.map((e, i) => (
                <Button
                  key={i}   
                  ariaLabel={e.name}
                  name="button-transparent"
                  type="h2"
                  text={e.text}
                  textName="text-normal-small"
                  func={{onClick: () => expandOut(
                    () => setSelectText(ref, formActive.optionList, i)
                  )}}
                />
              ))}
            </DropdownBlock>
          </Block>
        </Block> 
      </Block>
    </section>
  ) 
}

const InputBlock = (prop: InputType) => (
  <Block type="div" name="block-label block-input">
    <label htmlFor={prop.name}>
      <Text type="h2" name="text-thin-small" children={prop.text}/>
    </label>
    <input type={prop.type} id={prop.name} name={prop.name}/>
  </Block>
)

const SelectBlock = (prop: SelectType) => {
  const {item, setItem, setRef} = prop

  const expandedRef = useContext(refContext)

  const ref = useRef<HTMLElement>(null!)

  function expandIn(e: MouseEvent) {
    setItem()

    const expanded = expandedRef.current
      
    remove(expanded.classList, "--none")

    add(expanded.classList, "--enter") 

    document.body.setAttribute("style", bodyStyle[1])

    setTimeout(() => add(expanded.classList, "--show"), 5)

    setRef(ref)
  }

  return (
    <Block blockRef={ref} type="div" name="block-label block-select">
      <label htmlFor={item.name}>
        <Text type="h2" name="text-thin-small" children={item.text}/>
      </label>
      <select id={item.name} name={item.name}>    
        <option defaultValue="disabled" style={{display: "none"}}/> 
        {item.optionList.map((e, i) => 
          <option key={i} value={e.name} children={e.text}/>
        )}
      </select>
      <Block type="div" name="block-selected" func={{onClick: expandIn}}>
        <Text type="h2" name="text-normal-small" children=""/>
      </Block>
    </Block> 
  )
}

export default Forms