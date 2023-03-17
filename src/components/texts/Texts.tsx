import { useAnimateOnView } from "../../functions/transition"
import { trans } from "../../functions/function.types"
import { TextType } from "./Texts.types"

import "./texts.css"

const transTitle = {...trans, start: 200, delayPerItem: 200}
const transSubtitle = {...trans, start: 600}
const transFooter = {...trans, start: 200}

const Text = (prop: TextType) => {
  const {textRef, name, children} = prop
  
  useAnimateOnView('.text-title', trans)
  useAnimateOnView('.text-big-title', transTitle)
  useAnimateOnView('.text-big-subtitle', transSubtitle)
  useAnimateOnView('.text-thin-small', transFooter)

  return (
    <prop.type ref={textRef} className={name}>
      {children}
    </prop.type>
  )
}

export {Text}