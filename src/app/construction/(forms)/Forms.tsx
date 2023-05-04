"use client"

import { useEffect, useRef, useState } from "react"
import { add, remove, setExit, setTransEnter, setTransExit } from "../../../functions/utils"
import { DivRef, OptionsType } from "../../../functions/types"
import { H1, H2 } from "../../../components/texts/Texts"
import { Button } from "../../../components/buttons/Buttons"
import data from "../../../secondPage.json"
import "./Forms.css"

type FormsType = {
  blockRef: DivRef,
  userId: number | null,
  setUserId: (s: number) => void
  decrement: () => void,
  increment: () => void,
}

type InputType = {
  item: {text: string, name: string, type: React.HTMLInputTypeAttribute}
}

type SelectType = {
  item: {text: string, name: string, options: OptionsType},
}

const form = data.forms
const name = "forms section block-black forms--none"

const Forms = (prop: FormsType) => {
  const {blockRef, userId, setUserId, increment, decrement} = prop
  
  const [index, setIndex] = useState(0)
  const parentRef = useRef<HTMLFormElement>(null!)

  function goBack() {
    if(index === 0) 
      setExit(blockRef, 700, decrement)
    else
      setTransEnter(blockRef, 450, () => setIndex(0))
  } 
  function goForward() {
    if(index === 1){
      if(userId === null)
        postUser(() => setExit(blockRef, 700, increment))
      else 
        setExit(blockRef, 700, increment )  
    }
    else{
      setTransEnter(blockRef, 450, () => setIndex(1))
    }
  }

  async function postUser(func: () => void) {
    const postHeader: RequestInit = { 
      method: "POST",
      keepalive: true,    
      referrer: "",
      referrerPolicy: "origin",  
      mode: "cors",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(Object.fromEntries(new FormData(parentRef.current))),
    }

    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/`, postHeader)
      .then(res => res.json())
      .then((res: {user: number[]}) => {
        setUserId(res.user[0])
        func()
      }).catch(err => {
        console.log(err)
        func()
      })
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
      <div className="info">
        <div className="wrapper-button">
          <Button isIcon name="button-transparent" ariaLabel="Voltar" func={{onClick: goBack}}/>
          <Button isIcon name="button-transparent" ariaLabel="Continuar" func={{onClick: goForward}}/>
        </div>
        <H2 name="text-thin-small">{form.infos[index].subtitle}</H2>
        <H1 name="text-big">{form.infos[index].title}</H1>
        <H2 name="text-thin">{form.infos[index].body}</H2>
      </div>
      <form ref={parentRef} className="form">
        <InputBlock item={form.inputs[0]}/>
        <SelectBlock item={form.selections[0]}/>
        <SelectBlock item={form.selections[1]}/>
        <SelectBlock item={form.selections[2]}/>
        <SelectBlock item={form.selections[3]}/>
        <SelectBlock item={form.selections[4]}/>
      </form>
    </section>
  ) 
}

const InputBlock = (prop: InputType) => (
  <div className="block-label block-input">
    <label htmlFor={prop.item.name}>
      <H2 name="text-thin-small">{prop.item.text}</H2>
    </label>
    <input type={prop.item.type} id={prop.item.name} name={prop.item.name}/>
  </div>
)

const SelectBlock = (prop: SelectType) => (
  <div className="block-label block-select">
    <label htmlFor={prop.item.name}>
      <H2 name="text-thin-small">{prop.item.text}</H2>
    </label>
    <select id={prop.item.name} name={prop.item.name} placeholder="Selecione uma opção">    
      {prop.item.options.map((e, i) => 
        <option key={i} value={e.name} children={e.text}/>
      )}
    </select>
  </div> 
)

export default Forms