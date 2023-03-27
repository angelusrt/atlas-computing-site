import { useAnimateOnView } from "../../functions/transition"
import { trans } from "../../functions/function.types"
import { TextType } from "./Texts.types"

import "./texts.css"

const transTitle = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 100,
  timeout: 200,
  start: 0,
  index: 0
}
const transOthers = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 0,
  timeout: 200,
  start: 200,
  index: 0
}

const Text = (prop: TextType) => {
  const {textRef, name, children} = prop
  
  useAnimateOnView('.text-title', trans)
  useAnimateOnView('.text-big-title', transTitle)
  useAnimateOnView('.text-big-subtitle', transOthers)
  useAnimateOnView('.text-thin-small', transOthers)

  return (
    <prop.type ref={textRef} className={name}>
      {children}
    </prop.type>
  )
}

export {Text}